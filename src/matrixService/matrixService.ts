import { IMatrix, IMatrixRow, ICeils, ICeil, IRows,  IAverage } from './../typesTS/typesTS';

function addNewRow(state :IMatrix) {
    const matrix = {...state}
    const rowCount:number = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount:number = matrix.rows.allIds ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length : 0;
    const lastrowId:string = matrix.rows.allIds[rowCount-1]
    const rowId:string = `${+lastrowId+1}`
    const ceilsIdForRow = []
    for (let j =0; j < columnCount; j++) {
        const ceilId:string = `${rowCount}x${j}`
        const amount = Math.floor( Math.random() * 1001)
        matrix.ceils.byId[ceilId] = {'id': ceilId, 'amount': amount}
        matrix.ceils.allIds.push(ceilId)
        ceilsIdForRow.push(ceilId)
    }
    matrix.rows.byId[rowId] =  { 'id': rowId, 'ceils': [...ceilsIdForRow] } 
    matrix.rows.allIds.push(rowId)
    return matrix
}

function getMatrixRows(numColumns:number, numRows:number):IMatrixRow {
    let ceils:ICeils = {byId:{}, allIds:[]}
    let rows:IRows = {byId:{}, allIds:[]}

    for (let i = 0; i< numRows; i++){
        const ceilsIdForRow = []
        for (let j =0; j < numColumns; j++) {
            const ceilId:string = `${i}x${j}`
            const amount = Math.floor( Math.random() * 1001)
            ceils.byId[ceilId] = {'id': ceilId, 'amount': amount}
            ceils.allIds.push(ceilId)
            ceilsIdForRow.push(ceilId)
        }
        const rowId = `${i}`
        rows.byId[rowId] = { 'id': rowId, 'ceils': [...ceilsIdForRow] } 
        rows.allIds.push(rowId)
    }
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

function deleteRow(ind:number, rows:IRows, ceils:ICeils):IMatrixRow {
    const rowId = `${ind}`
    const arrCeilsId = rows.byId[rowId].ceils
    rows.allIds.splice(rows.allIds.indexOf(rowId), 1)
    rows.byId[rowId]=null
    arrCeilsId.forEach((item:string) => {
        ceils.allIds.splice(ceils.allIds.indexOf(item),1)
        ceils.byId[item]=null
    })
    return {
       rows: rows,
       ceils: ceils
    }
}

const getAverages = (matrix: IMatrix): IAverage[] => {
    let arrAverage:IAverage[]=[]
    const rowCount = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount = matrix.rows.allIds ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length : 0;
    for (let j=0; j < columnCount; j++) {
        let sum:number = 0
        matrix.rows.allIds.forEach((rowId:string) => {
            const ceilId = matrix.rows.byId[rowId].ceils[j]
            sum += matrix.ceils.byId[ceilId].amount
        })
        arrAverage[j] = { id: `footer${j}`, amount: Math.ceil(sum / rowCount) };
    }
    return arrAverage;
};

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