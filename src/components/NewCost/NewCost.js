import './NewCost.css'
import CostForm from "./CostForm";
import {useState} from "react";

const NewCost = (props) => {

    const [isFormVisible,setIsFormVisible] = useState(false)

    const inputCostDataHandler = () => {
         setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    const saveCostDataHandler = (inputCostData) => {
        const costDate = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costDate)
        setIsFormVisible(false)
    }

    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
            {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData={saveCostDataHandler} />}
        </div>
    );
};

export default NewCost;