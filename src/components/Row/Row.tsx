import React, { FC, useMemo, useCallback, useState } from "react";
import { connect } from "react-redux";
import DeleteRow from "../DeleteRow/DeleteRow";
import Ceil from '../Ceil/Ceil'
import { getSumOfRow } from "../../matrixService/matrixService";

import {
  IMatrix,
} from "../../typesTS/typesTS";

//import "./Row.css";
import * as styles from "./Row.module.css";
const css = styles.default;


interface IRowProps {
  rowId:string;
  oneRow: any;
  footerClass: string;
  bright:string[];
}

const Row: FC<IRowProps> = ({
  rowId,
  oneRow,
  footerClass,
  bright
}) => {
  const [part, setPart] = useState(false)
  const  sum:number = useMemo( () => getSumOfRow(oneRow), [oneRow])
   
  const mouseOverSumHandler = useCallback ( (event: any) => {
      setPart((prevPart) => !prevPart )
    }, [part])
  

  const row = oneRow.map((item: any) => {
    const isBright = bright.includes(item.id, 0) ? true : false 
    return (
      <Ceil key={item.id} item={item} sum={sum} footerClass={footerClass} part={part}   isBright={isBright}/>
    );
  });
  
  return (
    <div className={`${css.matrixRow}`}>
      <div className={`${css.matrixCeil} ${css.sidebarRow}`}>
        <DeleteRow footerClass={footerClass} ind={rowId} />
      </div>
      {row}
      <div
        className={`${css.matrixCeil} ${css.sum}`}
        data-id={"sum"}
        data-ind={rowId}
        onMouseOver={mouseOverSumHandler}
        onMouseOut={mouseOverSumHandler}
      >
        {sum}
      </div>
    </div>
  );
};

const mapStateToProps = (matrix: IMatrix) => {
  return {
    matrix
  };
};

// const mapDispatchToProps = {
//   //mouseOverSum
// };

export default connect(mapStateToProps, null)(React.memo(Row));
