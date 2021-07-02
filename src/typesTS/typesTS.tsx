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

export type TFunc = (params:IStateParamsHelp) => void

export interface ICeil {
  id: string;
  amount: number;
}
export interface ICeilsById {
  [key:string]:ICeil;
}
export interface ICeils{
  allIds: string[];
  byId:  ICeilsById;
}

export interface IRow {
  id: string;
  ceils: string[] ;
}
export interface IRowsById {
  [key:string]: IRow;
}
export interface IRows {
  allIds: string[];
  byId:  IRowsById;
} 

export interface IMatrix {
  bright: string[] | [];
  ceils: ICeils;
  rows: IRows;
}
export interface IMatrixRow {
  ceils: ICeils;
  rows: IRows;
}
export interface IStateMatrix {
  matrix: IMatrix;
  params: IStateParamsHelp;
}

export interface IAverage {
  id: string;
  amount: number;
}

//interface for params 
export interface IStateParamsHelp {
  M1:number | null;
  N1:number | null;
  X1:number | null;

}

//interface for action

interface IOverCeilPayload {
  ceilId: string;
  X: number;
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
  payload: string;
}
interface IMouseOverCeil {
  type: typeof MOUSE_OVER_CEIL;
  payload: IOverCeilPayload;
}
interface IMouseOut {
  type: typeof MOUSE_OUT;
  payload: string;
}
interface IMouseOverSum {
  type: typeof MOUSE_OVER_SUM;
  payload:number;
}

interface IAddParams {
  type: typeof ADD_PARAMS;
  payload:  IStateParamsHelp;
}
interface IAddMatrix {
  type: typeof ADD_MATRIX;
  payload: IMatrix
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
