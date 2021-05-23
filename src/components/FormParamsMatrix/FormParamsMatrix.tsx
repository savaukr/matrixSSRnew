import React, {FC, useState} from 'react'
import './FormParamsMatrix.css'
import {useHttp} from '../../hooks/http.hook'


export const FormParamsMatrix:FC = ()=> {
    const [form, setForm]=useState({
        rows :'',
        columns: ''
	})
    const [message, setMessage] = useState('')
    const {request} = useHttp()

    const changeHandler = (event:any) => {
		setForm({...form, [event.target.name]: event.target.value})
	}

    const sendHandler =  async () => {
		try {
			const data = await request(`/?rows=${form.rows}&columns=${form.columns}`, 'GET')
			setMessage(data.message)
		} catch (e) {}
	}
    return (
        <div className="form_params">
            <div>{message}</div>
            <div className="input-field">
                <label htmlFor="rows">Стрічки:</label>
                    <input 
                    placeholder="Введіть кількість стрічок"
                    id="rows"
                    type="text"
                    name="rows"
                    value={form.rows}
                    onChange={changeHandler}
                    />
			</div>
            <div className="input-field">
                <label htmlFor="columns">Стовбці:</label>
                <input 
                placeholder="Введіть кількість стовпчиків"
                id="columns"
                type="text"
                name="columns"
                value={form.columns}
                onChange={changeHandler}
                />
            </div>
            <button onClick={sendHandler}>Відправити параметри матриці</button>
        </div>
       
    )
}