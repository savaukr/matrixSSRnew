import React, { FC, useMemo, useCallback, useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import DeleteRow from "../DeleteRow/DeleteRow";
import Ceil from "../Ceil/Ceil";
import { getSumOfRow } from "../../matrixService/matrixService";

import { ICeil, IStateMatrix, IStateParamsHelp } from "../../typesTS/typesTS";

//import "./Row.css";
import styles from "./Row.module.css";
const css = styles

interface IRowProps {
  params: IStateParamsHelp;
  rowId: string;
  oneRow: ICeil[];
  footerClass: string;
  bright: string[];
}

const Row: FC<IRowProps> = ({ params, rowId, oneRow, footerClass, bright }) => {
  const [part, setPart] = useState(false);
  const sum: number = useMemo(() => getSumOfRow(oneRow), [oneRow]);

  const mouseOverSumHandler = useCallback(
    (event: SyntheticEvent) => {
      setPart((prevPart) => !prevPart);
    },
    [part]
  );

  const row = oneRow.map((item: ICeil) => {
    const isBright = bright.includes(item.id, 0) ? true : false;
    return (
      <Ceil
        key={item.id}
        item={item}
        sum={sum}
        footerClass={footerClass}
        part={part}
        isBright={isBright}
        X1={params.X1}
      />
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

const mapStateToProps = (state: IStateMatrix) => {
  return {
    params: state.params,
  };
};


export default connect(mapStateToProps, null)(React.memo(Row));
