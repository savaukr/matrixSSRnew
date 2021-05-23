import React, { FC } from "react";
import { connect } from "react-redux";
import DeleteRow from "../DeleteRow/DeleteRow";
import {
  increaseAmount,
  mouseOverCeil,
  mouseOut,
  mouseOverSum,
} from "../../redux/actions";
import { X } from "../../config/config";
import "./Row.css";
import {
  IRowItem,
  IStateMatrix,
  ActionsTypes,
  IAverage,
} from "../../typesTS/typesTS";

interface IRowProps {
  matrix: IRowItem[][];
  arrRow: IAverage[];
  footerClass: string;
  ind: number;
  increaseAmount(row: number, column: number): ActionsTypes;
  mouseOverCeil(arr: IRowItem[][]): ActionsTypes;
  mouseOverSum(arr: IRowItem[][]): ActionsTypes;
  mouseOut(arr: IRowItem[][]): ActionsTypes;
}

const Row: FC<IRowProps> = ({
  matrix,
  arrRow,
  footerClass,
  ind,
  increaseAmount,
  mouseOverCeil,
  mouseOverSum,
  mouseOut,
}) => {
  const getSumRow = (row: IAverage[]): number => {
    return row.reduce(
      (summa: number, item: IAverage): number => summa + item.amount,
      0
    );
  };
  const sum = getSumRow(arrRow);

  //   interface Event extends React.MouseEvent{
  //     dataset: {id:string};
  // }
  //event:Event ????????????????
  const increaseAmountHandle = (event:any): void => {

    if (event.target.dataset.id[0] !== "f") {
      const row = +event.currentTarget.dataset.id.split("x")[0];
      const column = +event.currentTarget.dataset.id.split("x")[1];
      increaseAmount(row, column);
    }
  };
  const mouseOverHandler: React.MouseEventHandler = (event: any) => {
    //мошук масиву  X найближчих Amount до вибраного
    //arr - state, elem - обраний елемент в state
    const findXNearAmount = (arr: IRowItem[][], elem: IRowItem, X: number) => {
      const arrSort: IRowItem[] = [];
      let k = 0;
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          arrSort[k] = Object.assign({}, arr[i][j]);
          k++;
        }
      }
      arrSort.sort((a: IRowItem, b: IRowItem) => {
        return a.amount - b.amount;
      });

      const index = +arrSort.findIndex(
        (item: IRowItem) => item.amount === elem.amount
      );

      let start, end; // початок та кінець найближчих Amount
      start = index - Math.ceil(X / 2);
      end = index + Math.ceil(X / 2);

      while (start < 0) {
        start++;
        end++;
      }
      while (end >= arrSort.length) {
        start--;
        end--;
      }

      if (X % 2) {
        const diffStart = arrSort[start]["amount"] - arrSort[index]["amount"];
        const diffEnd = arrSort[index]["amount"] - arrSort[end]["amount"];
        if (diffStart !== diffEnd && diffStart > diffEnd) start++;
        else end--;
      }
      //щоб виділити обраний елемент замінити index+1 на  index
      return [
        ...arrSort.slice(start, index),
        ...arrSort.slice(index + 1, end + 1),
      ];
    };

    if (
      event.target.dataset.id[0] !== "f" &&
      event.target.dataset.id[0] !== "s"
    ) {
      const row = +event.target.dataset.id.split("x")[0];
      const column = +event.target.dataset.id.split("x")[1];
      const arr = matrix.concat();
      let arrNear = findXNearAmount(arr, arr[row][column], X);

      arrNear.forEach((elem: IRowItem) => {
        const i = +elem.id.split("x")[0];
        const j = +elem.id.split("x")[1];
        elem.bright = !elem.bright;
        arr[i][j] = Object.assign({}, elem);
      });
      mouseOverCeil(arr);
    }
  };

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

  const mouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const arr = matrix.concat();
    mouseOverHandler(event);
    arr.forEach((row) => {
      row.forEach((ceil) => (ceil.bright = false));
    });
    mouseOut(arr);
  };

  const row = arrRow.map((item: any) => {
    const styles = {
      height: Math.round((item.amount * 100) / sum) * 2 + "%",
    };
    return (
      <div
        key={item.id}
        className={`matrix-ceil ${footerClass || ""} ${
          item.bright ? "bright" : ""
        } ${item.part ? "part" : ""}`}
        data-part={`${Math.round((item.amount * 100) / sum)}%`}
        data-id={item.id}
        onClick={increaseAmountHandle}
        onMouseDown={(event) => {
          event.preventDefault();
        }}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        {item.part ? (
          <div>{`${Math.round((item.amount * 100) / sum)}%`}</div>
        ) : (
          item.amount
        )}
        <div style={styles}></div>
      </div>
    );
  });

  return (
    <div className="matrix-row">
      <div className="matrix-ceil sidebar-row">
        <DeleteRow footerClass={footerClass} ind={ind} />
      </div>
      {row}
      <div
        className="matrix-ceil sum"
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
  increaseAmount,
  mouseOverCeil,
  mouseOut,
  mouseOverSum,
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
