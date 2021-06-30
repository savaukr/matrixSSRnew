import React, { FC, useMemo, useCallback, useState, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteRow from "../DeleteRow/DeleteRow";
import { deleteRow } from "../../redux/actions";
import Ceil from "../Ceil/Ceil";
import { getSumOfRow } from "../../matrixService/matrixService";

import { ICeil, IStateParamsHelp } from "../../typesTS/typesTS";
import { TRootState} from '../../redux/rootReducer'

//import "./Row.css";
import styles from "./Row.module.css";
const css = styles

interface IRowProps {
  rowId: string;
  oneRow: ICeil[];
  footerClass: string;
  bright: string[];
}

const Row: FC<IRowProps> = ({ rowId, oneRow, footerClass, bright }) => {
  const params:IStateParamsHelp = useSelector((state:TRootState) => state.params)
  const [part, setPart] = useState(false);
  const sum: number = useMemo(() => getSumOfRow(oneRow), [oneRow]);

  const mouseOverSumHandler = useCallback(
    (event: SyntheticEvent) => {
      setPart((prevPart) => !prevPart);
    },
    [part]
  );

  const row = oneRow.map((item: ICeil) => {
    const isBright = bright.includes(item.id, 0);
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

  
  const dispatch = useDispatch()
  const deleteHandle = 
    (event: React.MouseEvent<HTMLButtonElement>):void => {
      dispatch(deleteRow(+rowId));
    }

  return (
    <div className={`${css.matrixRow}`}>
      <div className={`${css.matrixCeil} ${css.sidebarRow}`}>
        <DeleteRow footerClass={footerClass} deleteHandle={deleteHandle} />
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


export default React.memo(Row);
