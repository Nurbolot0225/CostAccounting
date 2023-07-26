import CostItem from "./CostItem";
import './Costs.css'

function Costs(props) {
    return (
        <div className='costs'>
            <CostItem
                data={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount}
            />
            <CostItem
                data={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].amount}
            />
            <CostItem
                data={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].amount}
            />
        </div>
    )
}

export default Costs;