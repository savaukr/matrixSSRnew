import React, { useEffect, useState, FC } from "react";
import { connect } from "react-redux";
import Row from "../Row/Row";

import {
  IRowItem,
  IAverage,
  IStateMatrix,
  IStateMatrixHelp,
} from "../../typesTS/typesTS";

//import "./Matrix.css";
import * as styles from './Matrix.module.css'
const css = styles.default;

interface IMatrixProps {
  matrix: IRowItem[][];
}

const Matrix: FC<IMatrixProps> = ({ matrix }) => {
  const [matrixJSX, setMatrixJSX] = useState();

  const getAverages = (arr: IRowItem[][]): IAverage[] => {
    const arrAverage = [];
    const rowCount = arr.length || 0;
    const columnCount = arr[0].length || 0;
    for (let j = 0; j < columnCount; j++) {
      let sum = 0;
      for (let i = 0; i < rowCount; i++) {
        sum += arr[i][j]["amount"];
      }
      arrAverage[j] = { id: `footer${j}`, amount: Math.ceil(sum / rowCount) };
    }
    return arrAverage;
  };

  function getMatrixJsx(arr: IRowItem[][]): any {
    let table = [];

    for (let i = 0; i < arr.length; i++) {
      table[i] = <Row key={i} arrRow={arr[i]} ind={i} footerClass={""} />;
    }
    table[arr.length] = (
      <Row
        key={arr.length}
        ind={arr.length}
        arrRow={getAverages(arr)}
        footerClass={"footer"}
      />
    );
    return table;
  }

  useEffect(() => {
    setMatrixJSX(getMatrixJsx(matrix));
  }, [matrix]);

  return (
    <div className={`${css.matrixWrap}`}>
      <div className={`${css.matrixContent}`}>
        <h4>
          Matrix {matrix.length}x{matrix[0].length}
        </h4>
        <div className={`${css.matrixHeader}`}>Сума по рядку</div>
        {matrixJSX}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStateMatrix): IStateMatrixHelp => {
  return {
    matrix: state.matrix.matrix,
  };
};

export default connect(mapStateToProps, null)(Matrix);
