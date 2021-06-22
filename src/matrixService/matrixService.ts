import { IMatrix, IMatrixRow, ICeils, ICeil, IRows, IRow, IAverage } from './../typesTS/typesTS';

function getMatrixRows(numColumns, numRows):IMatrixRow {
    let ceils:ICeils
    let rows:IRows

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

function getMatrix(M:number,N:number):IMatrix {
    return {
        part:[],
        bright:[],
        ...getMatrixRows(M, N)
    }
}

function deleteRow(ind, rows, ceils) {
    const arrCeilsId = rows?.byId[ind].ceils || []
    arrCeilsId.forEach((item) => {
        delete ceils.byId[item]
    })
    delete rows.byId[ind]
    return {
        rows, ceils
    }
}

const getAverages = (matrix: IMatrix): IAverage[] => {
    let arrAverage;
    const rowCount = matrix.rows?.allIds ?  matrix.rows?.allIds.length : 0;
    const columnCount = matrix.ceils?.allIds ?  matrix.rows?.allIds.length : 0;
    matrix.rows.allIds.forEach((rowId:string, j:number) => {
      let sum =0
      matrix.rows.byId[rowId].ceils.forEach((ceilId:string) => {
        sum += matrix.ceils.byId[ceilId].amount
      })
      arrAverage[j] = { id: `footer${j}`, amount: Math.ceil(sum / rowCount) };
    })
    return arrAverage;
};

const getSumOfRow = (row: ICeil[]) => {
    return row.reduce(
        (summa: number, item: ICeil): number => summa + item.amount,
        0
    );
}

export {
    getMatrixRows, getMatrix, deleteRow, getAverages, getSumOfRow
}