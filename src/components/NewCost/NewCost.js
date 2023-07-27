import './NewCost.css'
import CostForm from "./CostForm";

const NewCost = (props) => {
    const saveCostDataHandler = (inputCostData) => {
        const costDate = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costDate)
    }

    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    );
};

export default NewCost;