import React, {FC} from 'react'
//import './AddRow.css'
 import  styles from './AddRow.module.css'

interface IAddRowProps {
    addRowHandle(event:React.MouseEvent<HTMLButtonElement>):void;
}

export const AddRow:FC<IAddRowProps> = ({addRowHandle})=> {
    return (
        <div className={styles.addRowWrap}>
            <button onClick={addRowHandle}>Створити рядок</button>
        </div>
       
    )
}