import {
  IMatrix,
  IMatrixRow,
  ICeils,
  ICeil,
  IRows,
  IAverage,
} from "./../typesTS/typesTS";

function cloneObj<CloneType>(obj: CloneType): CloneType {
  return JSON.parse(JSON.stringify(obj));
}

//допоміжна функція отримання стрічки для матриці
function getNewRow(
  numColumns: number,
  indRow: number,
  ceils: ICeils = { byId: {}, allIds: [] }
) {
  const newCeils: ICeils = cloneObj(ceils);
  const ceilsIdForRow = new Array(numColumns)
    .fill(undefined)
    .map((itemColumn, indColumn) => {
      const ceilId: string = `${indRow}x${indColumn}`;
      const amount = Math.floor(Math.random() * 1001);
      newCeils.byId[ceilId] = { id: ceilId, amount: amount };
      newCeils.allIds.push(ceilId);
      return ceilId;
    });
  return { newCeils, ceilsIdForRow };
}

function addNewRow(state: IMatrix) {
  const matrix = cloneObj(state);
  const rowCount: number = matrix.rows?.allIds ? matrix.rows?.allIds.length : 0;
  const columnCount: number = matrix.rows.allIds
    ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length
    : 0;
  const lastrowId: string = matrix.rows.allIds[rowCount - 1];
  const rowId: string = `${+lastrowId + 1}`;
  const { newCeils, ceilsIdForRow } = getNewRow(
    columnCount,
    +rowId,
    matrix.ceils
  );
  matrix.ceils = newCeils;
  matrix.rows.byId[rowId] = { id: rowId, ceils: [...ceilsIdForRow] };
  matrix.rows.allIds.push(rowId);
  //відсортуємо масив з всіма Id комірок матриці, для подальшого пошуку комірок з підсвіткою
  matrix.ceils.allIds.sort((a: string, b: string) => {
    return matrix.ceils.byId[a].amount - matrix.ceils.byId[b].amount;
  });
  return matrix;
}

function getMatrixRows(numColumns: number, numRows: number): IMatrixRow {
  let ceils: ICeils = { byId: {}, allIds: [] };
  let rows: IRows = { byId: {}, allIds: [] };

  if (numRows) {
    rows.allIds = new Array(numRows).fill(undefined).map((itemRow, indRow) => {
      const { newCeils, ceilsIdForRow } = getNewRow(numColumns, indRow, ceils);
      const rowId = `${indRow}`;
      rows.byId[rowId] = { id: rowId, ceils: [...ceilsIdForRow] };
      ceils = newCeils;
      return rowId;
    });

    //відсортуємо масив з всіма Id комірок матриці, для подальшого пошуку комірок з підсвіткою
    ceils.allIds.sort((a, b) => {
      return ceils.byId[a].amount - ceils.byId[b].amount;
    });
  }
  return {
    ceils: ceils,
    rows: rows,
  };
}

function getMatrix(N: number, M: number): IMatrix {
  return {
    bright: [],
    ...getMatrixRows(N, M),
  };
}

function deleteCeils(rowId: string, rows: IRows, ceils: ICeils): ICeils {
  rows.byId[rowId].ceils.map((item: string) => {
    ceils.allIds.splice(ceils.allIds.indexOf(item), 1);
    ceils.byId[item] = null;
    return item;
  });
  return ceils;
}

function deleteRow(ind: number, rows: IRows, ceils: ICeils): IMatrixRow {
  const newRows = cloneObj<IRows>(rows);
  let newCeils = cloneObj<ICeils>(ceils);
  const rowId = `${ind}`;
  newCeils = deleteCeils(rowId, newRows, newCeils);
  newRows.allIds.splice(rows.allIds.indexOf(rowId), 1);
  newRows.byId[rowId] = null;
  return {
    rows: newRows,
    ceils: newCeils,
  };
}

const getAverages = (stateMatrix: IMatrix): IAverage[] => {
  const matrix = cloneObj(stateMatrix);
  const rowCount = matrix.rows?.allIds ? matrix.rows?.allIds.length : 0;
  const columnCount = matrix.rows.allIds
    ? matrix.rows.byId[matrix.rows.allIds[0]].ceils.length
    : 0;

  let arrAverage: IAverage[] = new Array(columnCount).fill(undefined);

  return arrAverage.map((item, ind) => {
    let sum = matrix.rows.allIds.reduce((result, rowId) => {
      const ceilId = matrix.rows.byId[rowId].ceils[ind];
      return result + matrix.ceils.byId[ceilId].amount;
    }, 0);
    return { id: `footer${ind}`, amount: Math.ceil(sum / rowCount) };
  });
};

const getSumOfRow = (row: ICeil[]): number => {
  return row.reduce(
    (summa: number, item: ICeil): number => summa + item.amount,
    0
  );
};
//Перший варіант функції getBrightCeilsIds 
// const getBrightCeilsIds = (ceils: ICeils, ceilId:string, X:number):string[] => {
//     let startInd:number, endInd:number, diff:number
//     const ind = ceils.allIds.indexOf(ceilId)
//     diff = ind-X
//     startInd =  diff > 0  ? diff : 0
//     diff = ind+X
//     endInd = diff < ceils.allIds.length ? diff : ceils.allIds.length-1
//     const arr:string[] = ceils.allIds.slice(startInd, endInd+1)
//     arr.sort((a:string, b:string) => {
//         return ceils.byId[a].amount - ceils.byId[b].amount
//     })
//     return [ceilId, ...arr.slice(0, X)]
// }


//Другий  варіант функції getBrightCeilsIds 
// function changeStart(
//   X: number,
//   start: number,
//   end: number,
//   ind: number,
//   ceils: ICeils
// ): number {
//   const arr: string[] = [...ceils.allIds];
//   const diffStart = ceils.byId[arr[ind]].amount - ceils.byId[arr[start]].amount;
//   const diffEnd = ceils.byId[arr[end]].amount - ceils.byId[arr[ind]].amount;
//   if ((diffEnd !== 0 && diffStart >= diffEnd) || (diffEnd === 0 && end !== ind))
//     start += 1;
//   if (
//     (diffStart !== 0 && diffStart < diffEnd) ||
//     (diffStart === 0 && start !== ind)
//   )
//     end -= 1;
//   if (end - start === X) return start;
//   else return changeStart(X, start, end, ind, ceils);
// }
// const getBrightCeilsIds = (
//   ceils: ICeils,
//   ceilId: string,
//   X: number
// ): string[] => {
//   if (ceils.allIds.length <= X) return [...ceils.allIds];
//   const ind: number = ceils.allIds.indexOf(ceilId);
//   let start: number = ind - X;
//   if (start < 0) start = 0;
//   let end = ind + X;
//   if (end > ceils.allIds.length - 1) end = ceils.allIds.length - 1;
//   start = changeStart(X, start, end, ind, ceils);
//   return [...ceils.allIds.slice(start, start + X + 1)];
// };


//Третій варіант функції getBrightCeilsIds 
// const getBrightCeilsIds1 =  (ceils: ICeils, ceilId:string, X:number):string[] => {
//     const ind:number = ceils.allIds.indexOf(ceilId)
//     const arr = ceils.allIds.slice(ind-X, ind+X+1)
//     interface IObjArr {
//         [key:string]:number;
//     }
//     const objArr:IObjArr = {}
//     const resultArr=[]
//     arr.map((item)=> {
//         const diff:number = Math.abs(ceils.byId[ceilId].amount -ceils.byId[item].amount)
//         objArr[item] = diff
//         resultArr.push(objArr)
//     })
//     resultArr.sort((a:IObjArr,b:IObjArr) => {
//         return Object.values(a)[0]- Object.values(b)[0]
//     })
//     return [...resultArr.slice(0, X+1).map((item) => {
//         return Object.keys(item)[0]
//     })]
// }


//Вірний варіант функції getBrightCeilsIds 
const getBrightCeilsIds = (
    ceils: ICeils,
    ceilId: string,
    X: number
  ): string[] => {
    const ind: number = ceils.allIds.indexOf(ceilId);
    return ceils.allIds
      .slice(Math.max(0, ind - X), Math.min(ceils.allIds.length, ind + X+1))
      .map((item) => {
          const diff:number = Math.abs(ceils.byId[ceilId].amount -ceils.byId[item].amount)
          return  {value: item,  diff}
      })
      .sort((a, b) => {
          return a.diff - b.diff
      })
      .slice(0, X+1)
      .map( ( item) => {
          return item.value
      });
  };

export {
  getMatrixRows,
  getMatrix,
  deleteRow,
  getAverages,
  getSumOfRow,
  addNewRow,
  getBrightCeilsIds,
  cloneObj,
};

// Давай этот блок кода перепишем, фактически тебе нужно вырезать подмассив четкой длинны,
//  который не вылазит за рамки массива [====---------], [-----=====------] ну или [-----====]
// Придумай более функциональную запись для этого кода.
// Ты сейчас говоришь как делать, а нужно писать так чтобы оно код говорил что делать.
// Подумай, потом выдерни меня и мы попробуем написать этот код лучше
