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

function deleteRow(ind:number, rows:any, ceils:any):IMatrixRow {
    const rowId = `${ind}`
    const arrCeilsId = rows.byId[rowId].ceils
    rows.allIds.splice(rows.allIds.indexOf(rowId), 1)
    delete rows.byId[rowId]
    arrCeilsId.forEach((item:string) => {
        ceils.allIds.splice(ceils.allIds.indexOf(item),1)
        delete ceils.byId[item]
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

export {
    getMatrixRows, getMatrix, deleteRow,
    getAverages, getSumOfRow, addNewRow
}