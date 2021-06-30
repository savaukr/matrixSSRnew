import React, { useEffect, useState, FC, useMemo} from "react";
import { useSelector } from "react-redux";
import Row from "../Row/Row";
import { getAverages } from "../../matrixService/matrixService";
import { IMatrix, ICeil} from "../../typesTS/typesTS";
import { maxRowId } from "../../config/config";
import { TRootState} from '../../redux/rootReducer'

//import "./Matrix.css";
import styles from "./Matrix.module.css";
const css = styles



const Matrix: FC = () => {
  const [matrixJSX, setMatrixJSX] = useState(null);
  const matrix:IMatrix = useSelector((state:TRootState) => state.matrix)
   
  const averages = useMemo(() => getAverages(matrix), [matrix.ceils])
  
  function getMatrixJsx(matrix: IMatrix): JSX.Element[] {
    let table = matrix.rows.allIds.map((rowId: string) => {
      const oneRow: ICeil[] = matrix.rows.byId[rowId].ceils.map(
        (ceilId: string) => matrix.ceils.byId[ceilId]
      );
      return (
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



export default Matrix;
