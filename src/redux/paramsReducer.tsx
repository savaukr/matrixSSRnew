
import {  IStateParamsHelp, ActionsTypes } from '../typesTS/typesTS'
import {ADD_PARAMS} from './types'


 const initialState:IStateParamsHelp = {
	M1: null,
	N1:null,
	X1:null,
}

export const paramsReducer = (state=initialState, action: ActionsTypes): IStateParamsHelp => {
	
	 switch (action.type) {
		case ADD_PARAMS: 
			return { ...state, ... action.payload }
	 	default: return state
	}
	return state
}