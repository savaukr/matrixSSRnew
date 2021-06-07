import React, {FC} from 'react'
//import './AddRow.css'
 import * as styles from './AddRow.module.css'
 console.log('styles', styles)

interface IAddRowProps {
    addRowHandle(event:React.MouseEvent<HTMLButtonElement>):void;
}

export const AddRow:FC<IAddRowProps> = ({addRowHandle})=> {
    return (
        <div className={styles.default.addRowWrap}>
            <button onClick={addRowHandle}>Створити рядок</button>
        </div>
       
    )
}