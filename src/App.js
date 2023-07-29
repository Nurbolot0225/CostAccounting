import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2020, 2, 12),
        description: 'Монитор',
        amount: 999.99,
    },
    {
        id: 'c2',
        date: new Date(2021, 11, 25),
        description: 'Macbook',
        amount: 1254.72,
    },
    {
        id: 'c3',
        date: new Date(2021, 3, 1),
        description: 'Pixel 6 pro',
        amount: 49.99,
    }
]

const App = () => {
    const [costs, setCosts] = useState(INITIAL_COSTS)

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler} />
            <Costs costs={costs}/>
        </div>
    );
}

export default App;