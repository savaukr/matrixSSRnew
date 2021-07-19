import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { ICeil } from "../../typesTS/typesTS";
import { increaseAmount, mouseOverCeil, mouseOut } from "../../redux/actions";
import { X } from "../../config/config";
import styles from "./Ceil.module.css";

const css = styles;

interface ICeilProps {
  item: ICeil;
  part: boolean;
  sum: number;
  footerClass: string;
  isBright: boolean;
  X1: number;
}

const Ceil: FC<ICeilProps> = ({
  item,
  part,
  sum,
  footerClass,
  isBright,
  X1
}) => {
  const stylesHeight = {
    height: Math.round((item.amount * 100) / sum) * 2 + "%",
  };
  const dispatch = useDispatch()

  const clickHandle = () => {
    dispatch(increaseAmount(item.id));
  }

  const mouseOverCeilHandler = () => {
    if (!footerClass) dispatch(mouseOverCeil(item.id, X1 || X));
  }

  const mouseOutHandler = () => {
    dispatch(mouseOut(item.id));
  }

  return (
    <div
      className={`
          ${css.matrixCeil} ${footerClass ? css.footer : ""}
          ${part ? css.part : ""}
          ${isBright ? css.bright : ""}
        `}
      onClick={clickHandle}
      onMouseOver={mouseOverCeilHandler}
      onMouseOut={mouseOutHandler}
    >
      {part ? (
        <div>{`${Math.round((item.amount * 100) / sum)}%`}</div>
      ) : (
        item.amount
      )}
      <div style={stylesHeight}></div>
    </div>
  );
};


export default React.memo(Ceil);
