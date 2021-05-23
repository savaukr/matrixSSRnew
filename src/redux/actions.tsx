import {ADD_ROW, DELETE_ROW, INCREASE_AMOUNT,
		MOUSE_OVER_CEIL, MOUSE_OUT, MOUSE_OVER_SUM} from './types';
import { ActionsTypes, IRowItem } from '../typesTS/typesTS'

export  function addRow(row: IRowItem[]): ActionsTypes {
	return {
		type: ADD_ROW,
		payload: row
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
export function mouseOverCeil(arr: IRowItem[][]): ActionsTypes {
	return {
		type: MOUSE_OVER_CEIL,
		payload: arr
	}
}
export function mouseOut(arr:IRowItem[][]): ActionsTypes {
	return {
		type: MOUSE_OUT,
		payload: arr
	}
}

export function mouseOverSum(arr: IRowItem[][]): ActionsTypes {
	return {
		type: MOUSE_OVER_SUM,
		payload: arr
	}
}
