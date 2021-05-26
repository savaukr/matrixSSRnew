
import {  IStateParamsHelp } from '../typesTS/typesTS'


 const initialState:IStateParamsHelp = {
	M1: null,
	N1:null,
	X1:null,
}

export const paramsReducer = (state=initialState, {}): IStateParamsHelp => {
	
	// switch (action.type) {
	// 	case ADD_ROW: 
	// 		return { ...state, matrix:[...state.matrix, action.payload]}
	// 	case DELETE_ROW:
	// 	    arr.splice(action.payload, 1)
	// 	    for (let i= action.payload; i<arr.length; i++) {
	// 	      for (let j=0; j< arr[i].length; j++) {
	// 	        const row = +arr[i][j].id.split('x')[0]
	// 	        arr[i][j].id = `${row-1}x${j}`
		        
	// 	      }
	// 	    }
	// 		return {...state, matrix:[...arr]}
	// 	case INCREASE_AMOUNT: 
	// 		const row = action.payload.row
	// 		const column = action.payload.column
	// 		arr[row][column]['amount'] = arr[row][column]['amount']+1
	// 		return { ...state, matrix:[...arr]}
	// 	case MOUSE_OVER_CEIL: 
	// 		return { ...state, matrix: [...action.payload]}
	// 	case MOUSE_OUT: 
	// 		return { ...state, matrix: [...action.payload]}
	// 	case MOUSE_OVER_SUM: 
	// 		return { ...state, matrix: [...action.payload]}
		

	// 	default: return state
	// }
	return state
}