import {
  ADD_ROW,
  DELETE_ROW,
  INCREASE_AMOUNT,
  MOUSE_OVER_CEIL,
  MOUSE_OVER_SUM,
  MOUSE_OUT,
  ADD_PARAMS,
  ADD_MATRIX
} from "../redux/types";

// interface for component
export interface IRowItem {
  amount: number;
  bright: boolean;
  id: string;
  part: boolean;
}

export interface IStateMatrixHelp {
  matrix: IRowItem[][];
}
export interface IStateParamsHelp {
  M1:number | null;
  N1:number | null;
  X1:number | null;

}

export interface IStateMatrix {
  matrix: IStateMatrixHelp;
  params: IStateParamsHelp;
}
export interface IAverage {
  id: string;
  amount: number;
}

//interface for action
interface objRowColumn {
  row: number;
  column: number;
}

interface IAddRow {
  type: typeof ADD_ROW;
  payload: any;
}
interface IDeleteRow {
  type: typeof DELETE_ROW;
  payload: number;
}
interface IIncreaseAmount {
  type: typeof INCREASE_AMOUNT;
  payload: objRowColumn;
}
interface IMouseOverCeil {
  type: typeof MOUSE_OVER_CEIL;
  payload: IRowItem[][];
}
interface IMouseOut {
  type: typeof MOUSE_OUT;
  payload: IRowItem[][];
}
interface IMouseOverSum {
  type: typeof MOUSE_OVER_SUM;
  payload: IRowItem[][];
}

interface IAddParams {
  type: typeof ADD_PARAMS;
  payload:  IStateParamsHelp;
}
interface IAddMatrix {
  type: typeof ADD_MATRIX;
  payload: IRowItem[][]
}

export type ActionsTypes =
  | IAddRow
  | IDeleteRow
  | IIncreaseAmount
  | IMouseOverCeil
  | IMouseOut
  | IMouseOverSum
  | IAddParams
  | IAddMatrix
