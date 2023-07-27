import CostItem from "./CostItem";
import './Costs.css'
import Card from "../UI/Card";

const Costs = (props) => {
    return (
        <Card className='costs'>
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
        </Card>
    )
}

export default Costs;