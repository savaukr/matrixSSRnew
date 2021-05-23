import React, {FC} from 'react'
import './AddRow.css'

interface IAddRowProps {
    addRowHandle(event:React.MouseEvent<HTMLButtonElement>):void;
}

export const AddRow:FC<IAddRowProps> = ({addRowHandle})=> {
    return (
        <div className="addrRow-wrap">
            <button onClick={addRowHandle}>Створити рядок</button>
        </div>
       
    )
}