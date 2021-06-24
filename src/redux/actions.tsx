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
export function increaseAmount(ceilId:string):ActionsTypes {
	return {
		type: INCREASE_AMOUNT,
		payload: ceilId
	}
}
export function mouseOverCeil(ceilId:string): ActionsTypes {
	return {
		type: MOUSE_OVER_CEIL,
		payload: ceilId
	}
}
export function mouseOut(ceilId: string): ActionsTypes {
	return {
		type: MOUSE_OUT,
		payload: ceilId
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
