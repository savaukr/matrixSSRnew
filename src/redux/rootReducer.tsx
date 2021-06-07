import {combineReducers} from 'redux'
import {matrixReducer} from './matrixReducer'
import {paramsReducer} from './paramsReducer'

export const rootReducer = combineReducers({
	matrix: matrixReducer,
	params: paramsReducer
})

export type RootState = ReturnType<typeof rootReducer>;