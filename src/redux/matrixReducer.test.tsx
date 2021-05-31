import {getMatrix, matrixReducer} from './matrixReducer'
import {addRow} from './actions'

describe("reduser matrix tests:", () => {
    test("getMatrix should return array of array of object", () => {
        expect(getMatrix(2,2).length).toEqual(2)
        expect(getMatrix(3,3)[0].length).toEqual(3)
    })
    test("getMatrix should return array of array of object with fields", () => {
        expect(getMatrix(3,3)[0][0]).toEqual(expect.objectContaining({
            amount: expect.any(Number),
            id:expect.any(String),
            bright: expect.any(Boolean),
            part: expect.any(Boolean)
        }))
    })
})

describe("matrixreducer tests:", () => {
    const initialState = {matrix: getMatrix(3,3)}
    const row = [{amount: 500, bright: false, id: '3x0',part: false},
                 {amount: 600, bright: false, id: '3x1',part: false},
                 {amount: 700, bright: false, id: '3x2',part: false}
                ]
    const output = {...initialState}.matrix.push(row)
    test("matrix reducer should return ", () => {
        expect(matrixReducer( initialState, addRow(row)).matrix[3]).toEqual(expect.arrayContaining(row))
    })
})
