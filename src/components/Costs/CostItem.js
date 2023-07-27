import {useState} from "react";
import CostDate from "./CostDate";
import './CostItem.css'
import Card from "../UI/Card";

const CostItem = (props) => {

    const [description, setDescription] = useState(props.description)

    const changeDescriptionHandler = () => {
        setDescription(prompt('Изменить описание', ''))
    }

    return (
        <Card className='cost-item'>
            <CostDate />
            <div className='cost-item__description'>
                <h2>{description === '' ? props.description : description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHandler} >Изменить</button>
        </Card>
    )
}

export default CostItem