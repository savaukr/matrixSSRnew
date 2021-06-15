import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import DeleteRow from "../DeleteRow/DeleteRow";
import Ceil from '../Ceil/Ceil'

import {
   mouseOverSum
} from "../../redux/actions";


//import "./Row.css";
import * as styles from "./Row.module.css";
const css = styles.default;

import {
  IRowItem,
  ActionsTypes,
  IAverage,
  IStateMatrix
} from "../../typesTS/typesTS";

interface IRowProps {
  matrix: IRowItem[][];
  arrRow: IAverage[];
  footerClass: string;
  ind: number;
  mouseOverSum(arr: IRowItem[][]): ActionsTypes;
}

const Row: FC<IRowProps> = ({
  matrix,
  arrRow,
  footerClass,
  ind,
  mouseOverSum
}) => {

  const getSumRow = useCallback((row: IAverage[]): number => {
    return row.reduce(
      (summa: number, item: IAverage): number => summa + item.amount,
      0
    );
  },[arrRow]);

  const sum = getSumRow(arrRow);
  
  const mouseOverSumHandler = (event: any) => {
    if (event.target.dataset.ind) {
        const arr = matrix.concat();
        if (ind < arr.length) {
        arr[ind].forEach((item) => {
            item.part = !item.part;
        });
        }
        mouseOverSum(arr);
    }
  };
  

  const row = arrRow.map((item: any) => {
    
    return (
      <Ceil key={item.id} item={item} sum={sum} footerClass={footerClass}/>
    );
  });

  return (
    <div className={`${css.matrixRow}`}>
      <div className={`${css.matrixCeil} ${css.sidebarRow}`}>
        <DeleteRow footerClass={footerClass} ind={ind} />
      </div>
      {row}
      <div
        className={`${css.matrixCeil} ${css.sum}`}
        data-id={"sum"}
        data-ind={ind}
        onMouseOver={mouseOverSumHandler}
        onMouseOut={mouseOverSumHandler}
      >
        {sum}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IStateMatrix) => {
  return {
    matrix: state.matrix.matrix,
  };
};


const mapDispatchToProps = {
  mouseOverSum
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
