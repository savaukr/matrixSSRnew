import {ADD_ROW, DELETE_ROW, INCREASE_AMOUNT,
		MOUSE_OVER_CEIL, MOUSE_OUT, MOUSE_OVER_SUM, ADD_PARAMS, ADD_MATRIX} from './types';
import { ActionsTypes, IMatrix, IStateParamsHelp } from '../typesTS/typesTS'

export  function addRow(matrix: IMatrix): ActionsTypes {
	return {
		type: ADD_ROW,
		payload: matrix
	}
}

export function deleteRow(ind:number): ActionsTypes {
	return {
		type: DELETE_ROW,
		payload: ind
	}
}
export function increaseAmount(row:number, column:number):ActionsTypes {
	return {
		type: INCREASE_AMOUNT,
		payload: {row, column}
	}
}
export function mouseOverCeil(newState: IMatrix): ActionsTypes {
	return {
		type: MOUSE_OVER_CEIL,
		payload: newState
	}
}
export function mouseOut(newState: IMatrix): ActionsTypes {
	return {
		type: MOUSE_OUT,
		payload: newState
	}
}

export function mouseOverSum(newState: IMatrix): ActionsTypes {
	return {
		type: MOUSE_OVER_SUM,
		payload: newState
	}
}

export function addParams(params:IStateParamsHelp): ActionsTypes {
	return {
		type: ADD_PARAMS,
		payload: params
	}
}
export function addMatrix(newMatrix: IMatrix): ActionsTypes {
	return {
		type: ADD_MATRIX,
		payload: newMatrix
	}
}
