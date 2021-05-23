import React, {FC} from 'react'
import {connect} from 'react-redux'
import {deleteRow} from '../../redux/actions'
import { ActionsTypes } from '../../typesTS/typesTS'

interface IDeleteRowProps {
    footerClass:string;
    deleteRow(ind:number):ActionsTypes;
    ind:number;
}

const DeleteRow:FC<IDeleteRowProps> = ({footerClass, deleteRow, ind}) => {
	const deleteHandle = (event:React.MouseEvent<HTMLButtonElement>) => {
        deleteRow(ind)
    }

    if (footerClass) {
        return (<></>)
    } else {
            return (
                <>
                    <button onClick={deleteHandle} >&times;</button>
                </>
            )
    }
}

const mapDispatchToProps = {
  deleteRow
}

export default connect(null, mapDispatchToProps)(DeleteRow)