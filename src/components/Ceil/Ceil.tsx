import React, { FC, useCallback } from "react";
import { connect } from "react-redux";
import { ICeil } from "../../typesTS/typesTS";
import { increaseAmount, mouseOverCeil, mouseOut } from "../../redux/actions";
import { ActionsTypes } from "../../typesTS/typesTS";
import { X } from "../../config/config";
import * as styles from "./Ceil.module.css";

const css = styles.default;

interface ICeilProps {
  item: ICeil;
  part: boolean;
  sum: number;
  footerClass: string;
  isBright: boolean;
  X1: number;
  increaseAmount(ceilId: string): ActionsTypes;
  mouseOverCeil(ceilId: string, X: number): ActionsTypes;
  mouseOut(ceilId: string): ActionsTypes;
}

const Ceil: FC<ICeilProps> = ({
  item,
  part,
  sum,
  footerClass,
  isBright,
  X1,
  increaseAmount,
  mouseOverCeil,
  mouseOut,
}) => {
  const stylesHeight = {
    height: Math.round((item.amount * 100) / sum) * 2 + "%",
  };

  const clickHandle = useCallback(() => {
    increaseAmount(item.id);
  }, [item]);

  const mouseOverCeilHandler = useCallback(() => {
    mouseOverCeil(item.id, X1 || X);
  }, [item]);

  const mouseOutHandler = useCallback(() => {
    mouseOut(item.id);
  }, [item]);

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

const mapDispatchToProps = {
  increaseAmount,
  mouseOverCeil,
  mouseOut,
};

export default connect(null, mapDispatchToProps)(React.memo(Ceil));
