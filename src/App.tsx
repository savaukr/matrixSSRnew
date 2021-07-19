import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddRow } from "./components/AddRow/AddRow";
import {  addParams, addMatrix, addRow } from "./redux/actions";
import Matrix from "./components/Matrix/Matrix";
import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'
import {  IStateParamsHelp, IMatrix, TFunc } from "./typesTS/typesTS";
import { getMatrix, addNewRow } from "./matrixService/matrixService";
import {TRootState} from './redux/rootReducer'


const App: FC = () => {
  const matrix:IMatrix = useSelector((state:TRootState) => state.matrix)
  const dispatch = useDispatch()

  const addRowHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addRow(addNewRow(matrix)));
  };
  
  const addParamsHandle = ():TFunc => {
    return (newParams: IStateParamsHelp) => {
      dispatch(addParams(newParams))
      dispatch(addMatrix(getMatrix(newParams.M1, newParams.N1)))
      if ((globalThis.history) != undefined) {
        history.pushState(null, null, `?M1=${newParams.M1}&N1=${newParams.N1}&X1=${newParams.X1}`)
      }
    }
  }

  try { 
    if (!matrix.rows.allIds.length)  {
      return (
        <div className="container">
            <FormParamsMatrix addParamsHandle={addParamsHandle}/>
          </div>
      );
    }
    return (
      <div className="container">
        <Matrix />
        <AddRow addRowHandle={addRowHandle} />
      </div>
    );
  } catch (err) {
    console.log(err.message);
  }
};

export default App;
