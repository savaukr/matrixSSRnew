import React, { FC } from "react";
import { connect } from "react-redux";
import { ICeil } from "../../typesTS/typesTS";

import * as styles from "./Ceil.module.css";
const css = styles.default;

interface ICeilProps {
  item: ICeil;
  part:boolean;
  sum:number;
  footerClass:string;
}
  
const Ceil: FC<ICeilProps> = ({item, part, sum, footerClass}) => {
  const stylesHeight = {
    height: Math.round((item.amount * 100) / sum) * 2 + "%",
  };
  return (
      <div
        className={`${css.matrixCeil} ${footerClass ? css.footer : ""}  ${part ? css.part : ""}`}
      >
        {part ? (
          <div>{`${Math.round((item.amount * 100) / sum)}%`}</div>
        ) : (
          item.amount
        )}
        <div style={stylesHeight}></div>
      </div>
    );
}


const mapDispatchToProps = {
  // increaseAmount,
  // mouseOverCeil,
  // mouseOut,
};

export default connect(null, mapDispatchToProps)(React.memo(Ceil));

// import React, { FC } from "react";
// import { connect } from "react-redux";
// import {
//   IStateParamsHelp,
//   ActionsTypes, ICeil
// } from "../../typesTS/typesTS";
// import { X } from "../../config/config";
// import * as styles from "./Ceil.module.css";

// import { increaseAmount, mouseOverCeil, mouseOut } from "../../redux/actions";

// const css = styles.default;

// interface ICeilProps {
//   part:boolean;
//   //matrix: IRowItem[][];
//   params: IStateParamsHelp;
//   item: ICeil;
//   sum: number;
//   footerClass: string;
//   increaseAmount(row: number, column: number): ActionsTypes;
//   //mouseOverCeil(arr: IRowItem[][]): ActionsTypes;
//   //mouseOut(arr: IRowItem[][]): ActionsTypes;
// }

// const Ceil: FC<ICeilProps> = ({
//   part,
//   // matrix,
//   params,
//   item,
//   sum,
//   footerClass,
//   increaseAmount,
//   // mouseOverCeil,
//   // mouseOut,
// }) => {
//   // const increaseAmountHandle = (event: any): void => {
//   //   if (event.target.dataset.id[0] !== "f") {
//   //     const row = +event.currentTarget.dataset.id.split("x")[0];
//   //     const column = +event.currentTarget.dataset.id.split("x")[1];
//   //     increaseAmount(row, column);
//   //   }
//   // };

//   const mouseOverHandler: React.MouseEventHandler = (event: any) => {
//     //мошук масиву  X найближчих Amount до вибраного
//     //arr - state, elem - обраний елемент в state
//     const findXNearAmount = (arr: IRowItem[][], elem: IRowItem, X: number) => {
//       const arrSort: IRowItem[] = [];
//       let k = 0;
//       for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//           arrSort[k] = Object.assign({}, arr[i][j]);
//           k++;
//         }
//       }
//       arrSort.sort((a: IRowItem, b: IRowItem) => {
//         return a.amount - b.amount;
//       });

//       const index = +arrSort.findIndex(
//         (item: IRowItem) => item.amount === elem.amount
//       );

//       let start, end; // початок та кінець найближчих Amount
//       start = index - Math.ceil(X / 2);
//       end = index + Math.ceil(X / 2);

//       while (start < 0) {
//         start++;
//         end++;
//       }
//       while (end >= arrSort.length) {
//         start--;
//         end--;
//       }

//       if (X % 2) {
//         const diffStart = arrSort[start].amount - arrSort[index].amount;
//         const diffEnd = arrSort[index].amount - arrSort[end].amount;
//         if (diffStart !== diffEnd && diffStart > diffEnd) start++;
//         else end--;
//       }
//       //щоб виділити обраний елемент замінити index+1 на  index
//       return [...arrSort.slice(start, index), ...arrSort.slice(index, end + 1)];
//     };

//     if (
//       event.target.dataset.id[0] !== "f" &&
//       event.target.dataset.id[0] !== "s"
//     ) {
//       const row = +event.target.dataset.id.split("x")[0];
//       const column = +event.target.dataset.id.split("x")[1];
//       const arr = matrix.concat();
//       const countNear = params.X1 || X;
//       let arrNear = findXNearAmount(arr, arr[row][column], countNear);
     
//       arrNear.forEach((elem: IRowItem) => {
//         const i = +elem.id.split("x")[0];
//         const j = +elem.id.split("x")[1];
//         elem.bright = !elem.bright;
//         arr[i][j] = Object.assign({}, elem);
//       });
//       mouseOverCeil(arr);
//     }
//   };

//   const mouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
//     const arr = matrix.concat();
//     mouseOverHandler(event);
//     arr.forEach((row) => {
//       row.forEach((ceil) => (ceil.bright = false));
//     });
//     mouseOut(arr);
//   };

//   const onMouseDownHandler = (event: React.MouseEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };
//   const stylesHeight = {
//     height: Math.round((item.amount * 100) / sum) * 2 + "%",
//   };
//   return (
//     <div
//       key={item.id}
//       className={`${css.matrixCeil} ${footerClass ? css.footer : ""} ${
//         item.bright ? css.bright : ""
//       } ${item.part ? css.part : ""}`}
//       data-part={`${Math.round((item.amount * 100) / sum)}%`}
//       data-id={item.id}
//       onClick={increaseAmountHandle}
//       onMouseDown={onMouseDownHandler}
//       onMouseOver={mouseOverHandler}
//       onMouseOut={mouseOutHandler}
//     >
//       {part ? (
//         <div>{`${Math.round((item.amount * 100) / sum)}%`}</div>
//       ) : (
//         item.amount
//       )}
//       <div style={stylesHeight}></div>
//     </div>
//   );
// };

// const mapStateToProps = (state: IStateMatrix) => {
//   return {
//     matrix: state.matrix.matrix,
//     params: state.params,
//   };
// };

// const mapDispatchToProps = {
//   increaseAmount,
//   mouseOverCeil,
//   mouseOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Ceil));
