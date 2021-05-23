import {combineReducers} from 'redux'
import {matrixReducer} from './matrixReducer'

export const rootReducer = combineReducers({
	matrix: matrixReducer
})

export type RootState = ReturnType<typeof rootReducer>;