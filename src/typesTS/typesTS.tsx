import {
  ADD_ROW,
  DELETE_ROW,
  INCREASE_AMOUNT,
  MOUSE_OVER_CEIL,
  MOUSE_OVER_SUM,
  MOUSE_OUT,
} from "../redux/types";

// interface fro component
export interface IRowItem {
  amount: number;
  bright: boolean;
  id: string;
  part: boolean;
}

export interface IStateMatrixHelp {
  matrix: IRowItem[][];
}

export interface IStateMatrix {
  matrix: IStateMatrixHelp;
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

export type ActionsTypes =
  | IAddRow
  | IDeleteRow
  | IIncreaseAmount
  | IMouseOverCeil
  | IMouseOut
  | IMouseOverSum;
