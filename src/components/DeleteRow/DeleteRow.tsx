import React, { FC} from "react";

interface IDeleteRowProps {
  footerClass: string;
  deleteHandle: any;
}

const DeleteRow: FC<IDeleteRowProps> = ({ footerClass, deleteHandle }) => {

  if (footerClass) {
    return <></>;
  } else {
    return (
      <>
        <button onClick={deleteHandle}>&times;</button>
      </>
    );
  }
};

export default DeleteRow
