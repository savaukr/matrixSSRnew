import { IMatrix, IMatrixRow, ICeils, ICeil, IRows,  IAverage } from './../typesTS/typesTS';

function addNewRow(state :IMatrix) {
    const matrix = {...state}
    console.log('matrix:', matrix)
    const rowCount:number = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount:number = matrix.rows.allIds ? matrix.rows.byId['0'].ceils.length : 0;
    const rowId = `${rowCount}`

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
    console.log('matrix:', matrix)
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

function deleteRow(ind:string, rows:any, ceils:any):IMatrixRow {
    const arrCeilsId = rows?.byId[ind].ceils
    arrCeilsId.forEach((item:string) => {
        delete ceils.byId[item]
    })
    delete rows.byId[ind]
    return {
        rows, ceils
    }
}

const getAverages = (matrix: IMatrix): IAverage[] => {
    let arrAverage:IAverage[]=[]
    const rowCount = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount = matrix.rows.allIds ? matrix.rows.byId['0'].ceils.length : 0;
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

export {
    getMatrixRows, getMatrix, deleteRow,
    getAverages, getSumOfRow, addNewRow
}