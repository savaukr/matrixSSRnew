import React, { FC } from "react";
import { connect } from "react-redux";
import { AddRow } from "./components/AddRow/AddRow";
import { addRow, addParams, addMatrix } from "./redux/actions";
import Matrix from "./components/Matrix/Matrix";
import {FormParamsMatrix} from './components/FormParamsMatrix/FormParamsMatrix'
import { ActionsTypes, IStateParamsHelp, IMatrixRow, IMatrix, IStateMatrix } from "./typesTS/typesTS";
import { getMatrix } from "./matrixService/matrixService";


interface IAppProps {
  // addRow(row: IMatrixRow): ActionsTypes;
  // addParams(params: IStateParamsHelp): ActionsTypes;
  // addMatrix(newMatrix: IMatrix): ActionsTypes;
  matrix: IMatrix;
  params: IStateParamsHelp;
}

const App: FC<IAppProps> = ({ matrix, params }): any => {
  
  // function getMatrixRow(columns:number, i: number) {
  //   const row = [];
  //   for (let j = 0; j < columns; j++) {
  //     const amount = Math.floor(Math.random() * 1001);
  //     row[j] = { id: `${i}x${j}`, amount, bright: false, part: false };
  //   }
  //   return row;
  // }

  const addRowHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    // addRow(getMatrixRow();
    console.log('add row')
  };

  const addParamsHandle = ():any => {
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
        <Matrix matrix={matrix} />
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
    params: state.params
  };
};

const mapDispatchToProps = {
  // addRow, addParams, addMatrix
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
