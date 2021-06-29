import { IMatrix, IMatrixRow, ICeils, ICeil, IRows,  IAverage } from './../typesTS/typesTS';

//допоміжна функція отримання стрічки для матриці
function getNewRow(numColumns:number, indRow:number, ceils:ICeils = {byId:{}, allIds:[]} ) {
    const newCeils:ICeils = cloneObj(ceils)
    const ceilsIdForRow = new Array(numColumns).fill(undefined).map((itemColumn, indColumn) => {
        const ceilId:string = `${indRow}x${indColumn}`
        const amount = Math.floor( Math.random() * 1001)
        newCeils.byId[ceilId] = {'id': ceilId, 'amount': amount}
        newCeils.allIds.push(ceilId)
        return ceilId
    })
    return {newCeils, ceilsIdForRow}
}

function addNewRow(state :IMatrix) {
    //const matrix = {...state}
    const matrix = JSON.parse(JSON.stringify(state))
    const rowCount:number = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount:number = matrix.rows.allIds ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length : 0;
    const lastrowId:string = matrix.rows.allIds[rowCount-1]
    const rowId:string = `${+lastrowId+1}`
    const {newCeils, ceilsIdForRow } = getNewRow(columnCount, +rowId, matrix.ceils)
    matrix.ceils = newCeils
    matrix.rows.byId[rowId] =  { 'id': rowId, 'ceils': [...ceilsIdForRow] } 
    matrix.rows.allIds.push(rowId)
    //відсортуємо масив з всіма Id комірок матриці, для подальшого пошуку комірок з підсвіткою 
    matrix.ceils.allIds.sort((a:string, b:string) => {
        return matrix.ceils.byId[b].amount -matrix.ceils.byId[a].amount
    })
    return matrix
}



function getMatrixRows(numColumns:number, numRows:number):IMatrixRow {
    let ceils:ICeils = {byId:{}, allIds:[]}
    let rows:IRows = {byId:{}, allIds:[]}
   
    rows.allIds = new Array(numRows).fill(undefined).map((itemRow, indRow)=> {
        const {newCeils, ceilsIdForRow} = getNewRow(numColumns, indRow, ceils)
        const rowId = `${indRow}`
        rows.byId[rowId] = { 'id': rowId, 'ceils': [...ceilsIdForRow] }
        ceils = newCeils
        return rowId
    })
  //відсортуємо масив з всіма Id комірок матриці, для подальшого пошуку комірок з підсвіткою 
    ceils.allIds.sort((a, b) => {
        return ceils.byId[b].amount -ceils.byId[a].amount
    })

    return {
        ceils:ceils,
        rows: rows
    }
}


function getMatrix( N:number, M:number):IMatrix {
    return {
        bright:[],
        ...getMatrixRows(N, M)
    }
}



// function deleteRow(ind:number, rows:IRows, ceils:ICeils):IMatrixRow {
//     const rowId = `${ind}`
//     const arrCeilsId = rows.byId[rowId].ceils
//     rows.allIds.splice(rows.allIds.indexOf(rowId), 1)
//     rows.byId[rowId]=null
//     arrCeilsId.forEach((item:string) => {
//         ceils.allIds.splice(ceils.allIds.indexOf(item),1)
//         ceils.byId[item]=null
//     })
//     return {
//        rows: rows,
//        ceils: ceils
//     }
// }

/////////////////////////////////////////////////////////////////
function cloneObj<CloneType>(obj:CloneType):CloneType {
    return  JSON.parse(JSON.stringify(obj))
}

function deleteRow(ind:number, rows:IRows, ceils:ICeils):IMatrixRow {
    const newRows = cloneObj<IRows>(rows)
    const newCeils =  cloneObj<ICeils>(ceils)
    const rowId = `${ind}`
    const arrCeilsId = newRows.byId[rowId].ceils
    newRows.allIds.splice(rows.allIds.indexOf(rowId), 1)
    newRows.byId[rowId]=null

    arrCeilsId.forEach((item:string) => {
        newCeils.allIds.splice(newCeils.allIds.indexOf(item),1)
        newCeils.byId[item]=null
    })
    return {
       rows: newRows,
       ceils: newCeils
    }
}

////////////////////////////////////////////////////////////////////
//функція getAverages в функціональному стилі
const getAverages = (stateMatrix:IMatrix): IAverage[] => {
    const matrix = cloneObj(stateMatrix)
    const rowCount = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount = matrix.rows.allIds ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length : 0;

    let arrAverage:IAverage[]=new Array(columnCount).fill(undefined)

    return arrAverage.map((item, ind) => {
        let sum =  matrix.rows.allIds.reduce((result, rowId) => {
            const ceilId = matrix.rows.byId[rowId].ceils[ind]
            return result + matrix.ceils.byId[ceilId].amount
        }, 0)
        return { id: `footer${ind}`, amount: Math.ceil(sum / rowCount) }
    })
}

////////////////////////

// const getAverages = (matrix: IMatrix): IAverage[] => {
//     let arrAverage:IAverage[]=[]
//     const rowCount = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
//     const columnCount = matrix.rows.allIds ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length : 0;
// // return new Array(100).fill(undefined).map((x, i) => i + 1);
//     for (let j=0; j < columnCount; j++) {
//         let sum:number = 0
//         matrix.rows.allIds.forEach((rowId:string) => {
//             const ceilId = matrix.rows.byId[rowId].ceils[j]
//             sum += matrix.ceils.byId[ceilId].amount
//         })
//         arrAverage[j] = { id: `footer${j}`, amount: Math.ceil(sum / rowCount) };
//     }
//     return arrAverage;

// };

const getSumOfRow = (row: ICeil[]):number => {
    return row.reduce(
        (summa: number, item: ICeil): number => summa + item.amount,
        0
    );

}

const getBrightCeilsIds = (ceils: ICeils, ceilId:string, X:number):string[] => {
    let startInd:number, endInd:number, diff:number
    const ind = ceils.allIds.indexOf(ceilId)
    diff = ind-X
    startInd =  diff > 0  ? ind-X : 0
    diff = ind+X
    endInd = diff < ceils.allIds.length ? ind+X : ceils.allIds.length-1 
   
    const arr:any = ceils.allIds.slice(startInd, endInd+1)
    arr.sort((a:string, b:string) => {
        return ceils.byId[b].amount - ceils.byId[a].amount
    })
    return [ceilId, ...arr.slice(0, X)]
}

export {
    getMatrixRows, getMatrix, deleteRow,
    getAverages, getSumOfRow, addNewRow,
    getBrightCeilsIds
}