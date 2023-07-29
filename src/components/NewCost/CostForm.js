import {useState} from "react";
import './CostForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) =>  {
        setInputName(event.target.value)
    }

    const amountChangeHandler = (event) =>  {
        setInputAmount(event.target.value)
    }

    const dateChangeHandler = (event) =>  {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costDate = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costDate)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return (
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type="number" value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type="date" value={inputDate} min='2022-01-01' step='2023-01-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-cost__actions'>
                <button type='submit' onClick={submitHandler}>Добавить Расход</button>
                <button type='button' onClick={props.onCancel}>Отмена</button>
            </div>
        </form>
    );
};

export default CostForm;