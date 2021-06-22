import React, {FC, useCallback} from 'react'
import {connect} from 'react-redux'
import {deleteRow} from '../../redux/actions'
import { ActionsTypes } from '../../typesTS/typesTS'

interface IDeleteRowProps {
    footerClass:string;
    deleteRow(ind:number):ActionsTypes;
    ind:string;
}

const DeleteRow:FC<IDeleteRowProps> = ({footerClass, deleteRow, ind}) => {
	const deleteHandle = useCallback((event:React.MouseEvent<HTMLButtonElement>) => {
        deleteRow(ind)
    }, [ind])

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