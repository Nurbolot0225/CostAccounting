import CostItem from "./CostItem";
import './Costs.css'
import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import {useState} from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2023')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    return (
        <div>
            <Card className='costs'>
                <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
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
        </div>
    )
}

export default Costs;