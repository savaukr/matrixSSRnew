import React, { FC, useMemo, useCallback, useState } from "react";
import { connect } from "react-redux";
import DeleteRow from "../DeleteRow/DeleteRow";
import Ceil from '../Ceil/Ceil'
import { getSumOfRow } from "../../matrixService/matrixService";

import {
  ActionsTypes,
  IMatrix,
} from "../../typesTS/typesTS";


import {
  mouseOverSum
} from "../../redux/actions";


//import "./Row.css";
import * as styles from "./Row.module.css";
const css = styles.default;


interface IRowProps {
  rowId:string;
  oneRow: any;
  footerClass: string;
  mouseOverSum(matrix: IMatrix): ActionsTypes;
}

const Row: FC<IRowProps> = ({
  rowId,
  oneRow,
  footerClass,
  mouseOverSum
}) => {

  const [part, setPart] = useState(false)

  // const getSumRow = useCallback( getSumOfRow, [oneRow] )
  // const sum:number = getSumRow(oneRow)

  const  sum:number = useMemo( () => getSumOfRow(oneRow), [oneRow])
   
  const mouseOverSumHandler = useCallback ( (event: any) => {
      setPart((prevPart) => !prevPart )}, [part])
  

  const row = oneRow.map((item: any) => {
    
    return (
      <Ceil key={item.id} item={item} sum={sum} footerClass={footerClass} part={part}/>
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


const mapDispatchToProps = {
  mouseOverSum
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Row));
