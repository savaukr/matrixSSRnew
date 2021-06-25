import React, { useEffect, useState, FC, useMemo} from "react";
import { connect } from "react-redux";
import Row from "../Row/Row";
import { getAverages } from "../../matrixService/matrixService";
import { IMatrix, ICeil } from "../../typesTS/typesTS";
import { maxRowId } from "../../config/config";

//import "./Matrix.css";
import styles from "./Matrix.module.css";
const css = styles

interface IMatrixProps {
  matrix: IMatrix;
}

const Matrix: FC<IMatrixProps> = ({ matrix }) => {
  const [matrixJSX, setMatrixJSX] = useState();

  //const averages = useCallback((matrix) => getAverages(matrix), [matrix.ceils]);
  const averages = useMemo(() => getAverages(matrix), [matrix.ceils])
  
  function getMatrixJsx(matrix: IMatrix): any {
    let table: any[] = [];
    matrix.rows.allIds.forEach((rowId: string) => {
      const oneRow: ICeil[] = matrix.rows.byId[rowId].ceils.map(
        (ceilId: string) => matrix.ceils.byId[ceilId]
      );
      table[+rowId] = (
        <Row
          key={rowId}
          rowId={rowId}
          oneRow={oneRow}
          footerClass={""}
          bright={matrix.bright}
        />
      );
    });
    table[maxRowId] =  (
      <Row
        key={maxRowId}
        rowId={`${maxRowId}`}
        oneRow={averages}
        footerClass={"footer"}
        bright={[]}
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
          Matrix {matrix.rows.allIds.length}x
          {matrix.rows.byId[matrix.rows.allIds[0]].ceils.length}
        </h4>
        <div className={`${css.matrixHeader}`}>Сума по рядку</div>
        {matrixJSX}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IMatrix): IMatrix => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, null)(Matrix);
