import React, { FC } from "react";
import { connect } from "react-redux";
import { AddRow } from "./components/AddRow/AddRow";
import {  addParams, addMatrix, addRow } from "./redux/actions";
import Matrix from "./components/Matrix/Matrix";
import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'
import {  IStateParamsHelp, IMatrix, IStateMatrix, TFunc } from "./typesTS/typesTS";
import { getMatrix, addNewRow } from "./matrixService/matrixService";
import { ActionsTypes } from './typesTS/typesTS'


interface IAppProps {
  addRow(matrix: IMatrix): ActionsTypes;
  addParams(params: IStateParamsHelp): ActionsTypes;
  addMatrix(newMatrix: IMatrix): ActionsTypes;
  matrix: IMatrix;
  //params: IStateParamsHelp;
}

const App: FC<IAppProps> = ({ matrix, addRow, addMatrix, addParams}) => {
  
  const addRowHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    addRow(addNewRow(matrix));
  };

  const addParamsHandle = ():TFunc => {
    return (newParams: IStateParamsHelp) => {
      addParams(newParams)
      addMatrix(getMatrix(newParams.M1, newParams.N1))
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

const mapStateToProps = (state: IStateMatrix) => {
  return {
    matrix: state.matrix,
   // params: state.params
  };
};

const mapDispatchToProps = {
  addRow,
  addParams,
  addMatrix
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
