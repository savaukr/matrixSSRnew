import React, {FC, useState} from 'react'
import './FormParamsMatrix.css'

interface IFormParamsMatrixProps {
    addParamsHandle():any
  }

export const FormParamsMatrix:FC<IFormParamsMatrixProps> = ({addParamsHandle}): any=> {
    const [form, setForm]=useState({
        M1 :'',
        N1: '',
        X1:''
	})
    const [message, setMessage] = useState('')

    const changeHandler = (event:any) => {
		setForm({...form, [event.target.name]: event.target.value})
	}

  
    const sendHandler = (e:any) => {
        e.preventDefault()
        const saveParams = addParamsHandle()
        saveParams({M1: +form.M1, N1:+form.N1, X1:+form.X1})
        setMessage("form is sending")
    }
    return (
        <div className="form_params">
            <div>{message}</div>
                <form id="form" onSubmit={sendHandler}>
                    <div className="input-field">
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
                    <div className="input-field">
                        <label htmlFor="N">Стовбці:</label>
                        <input 
                        placeholder="Введіть кількість стовпчиків"
                        id="N1"
                        type="text"
                        name="N1"
                        value={form.N1}
                        onChange={changeHandler}
                        />
                    </div><div className="input-field">
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