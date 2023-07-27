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
                {props.costs.map(cost => <CostItem
                        key={cost.id}
                        data={cost.data}
                        description={cost.description}
                        amount={cost.amount}
                    />
                )}
            </Card>
        </div>
    )
}

export default Costs;