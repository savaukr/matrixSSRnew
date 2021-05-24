import React, { FC } from "react";

import { connect } from "react-redux";
import { AddRow } from "./components/AddRow/AddRow";
import { addRow } from "./redux/actions";
import Matrix from "./components/Matrix/Matrix";
import { N } from "./config/config";
import { ActionsTypes, IRowItem, IStateMatrix } from "./typesTS/typesTS";

interface IAppProps {
  addRow(row: IRowItem[]): ActionsTypes;
  matrix: IRowItem[][];
}

const App: FC<IAppProps> = ({ addRow, matrix }): any => {
  function getMatrixRow(columns = N, i: number) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const amount = Math.floor(Math.random() * 1001);
      row[j] = { id: `${i}x${j}`, amount, bright: false, part: false };
    }
    return row;
  }

  const addRowHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    addRow(getMatrixRow(matrix[0].length | N, matrix.length));
  };

  try {
    if (!matrix.length)
      return (
        <div className="container">
          <h1>Немає жодної стрічки!</h1>
          <AddRow addRowHandle={addRowHandle} />
        </div>
      );
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
    matrix: state.matrix.matrix,
  };
};

const mapDispatchToProps = {
  addRow,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
