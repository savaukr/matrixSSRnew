import {ADD_ROW,
		ADD_MATRIX,
		DELETE_ROW,
		INCREASE_AMOUNT,
		MOUSE_OVER_CEIL, MOUSE_OUT,
		// MOUSE_OVER_SUM, 
} from './types'
import {M, N} from '../config/config'
import {  IMatrix, ActionsTypes } from '../typesTS/typesTS'
import {getMatrix,
	   deleteRow,
	   getBrightCeilsIds
} from '../matrixService/matrixService'



 const initialState:IMatrix = getMatrix(M, N)


export const matrixReducer = (state=initialState, action: ActionsTypes): IMatrix => {
	switch (action.type) {
		case ADD_ROW: 
			return { ...state, ...action.payload}
		case DELETE_ROW: 
		    const rows = {...state.rows} 
			const ceils = {...state.ceils}
			return {...state, ...deleteRow(action.payload, rows, ceils)}
		case INCREASE_AMOUNT: 
			const newCeils = {...state.ceils}
			newCeils.byId[action.payload].amount =  newCeils.byId[action.payload].amount+1
			return { ...state, ceils: newCeils}
		 case MOUSE_OVER_CEIL: 
			return { ...state,  bright:getBrightCeilsIds(state.ceils, action.payload, 5)}
		case MOUSE_OUT: 
		 	return { ...state, bright: []}
		// case MOUSE_OVER_SUM: 
		// 	return { ...state, ...action.payload}
		case ADD_MATRIX:
			return {...state, ...action.payload}

		default: return state
	}
}