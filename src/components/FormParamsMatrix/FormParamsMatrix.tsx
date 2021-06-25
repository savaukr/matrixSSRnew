import React, {FC, useState} from 'react'
import { TFunc } from '../../typesTS/typesTS'
//import './FormParamsMatrix.css'
import styles from './FormParamsMatrix.module.css'
const css = styles


interface IFormParamsMatrixProps {
    addParamsHandle:() => TFunc
  }

export const FormParamsMatrix:FC<IFormParamsMatrixProps> = ({addParamsHandle}) => {
    const [form, setForm]=useState({
        M1 :'',
        N1: '',
        X1:''
	})
    const [message, setMessage] = useState('')

    type InputEvent = React.ChangeEvent<HTMLInputElement>;

    const changeHandler = (event:InputEvent) => {
		setForm({...form, [event.target.name]: event.target.value})
	}

    
    const sendHandler = (event:React.SyntheticEvent) => {
        event.preventDefault()
        const saveParams = addParamsHandle()
        saveParams({M1: +form.M1, N1:+form.N1, X1:+form.X1})
        setMessage("form is sending")
    }
    return (
        <div className={`${css.form_params}`}>
            <div>{message}</div>
                <form id="form" onSubmit={sendHandler}>
                    <div className={`${css.inputField}`}>
                        <label htmlFor="M">Стрічки:</label>
                            <input 
                            placeholder="Введіть кількість стрічок"
                            id="M1"
                            type="text"
                            name="M1"
                            value={form.M1}
                            onChange={changeHandler}
                            />
                    </div>
                    <div className={`${css.inputField}`}>
                        <label htmlFor="N">Стовбці:</label>
                        <input 
                        placeholder="Введіть кількість стовпчиків"
                        id="N1"
                        type="text"
                        name="N1"
                        value={form.N1}
                        onChange={changeHandler}
                        />
                    </div><div className={`${css.inputField}`}>
                        <label htmlFor="X">X1:</label>
                        <input 
                        placeholder="Введіть X"
                        id="X1"
                        type="text"
                        name="X1"
                        value={form.X1}
                        onChange={changeHandler}
                        />
                    </div>
                     <button className="sendParams" onClick={sendHandler}>Відправити параметри матриці</button>
                </form>
        </div>
       
    )
}