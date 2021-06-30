import {combineReducers} from 'redux'
import {matrixReducer} from './matrixReducer'
import {paramsReducer} from './paramsReducer'

export const rootReducer = combineReducers({
	matrix: matrixReducer,
	params: paramsReducer
})

export type TRootState = ReturnType<typeof rootReducer>;