import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const App = () => {
    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Монитор',
            amount: 999.99,
        },
        {
            date: new Date(2021, 11, 25),
            description: 'Macbook',
            amount: 1254.72,
        },
        {
            date: new Date(2021, 4, 1),
            description: 'Pixel 6 pro',
            amount: 49.99,
        }
    ]

    return (
        <div>
            <NewCost />
            <Costs costs={costs}/>
        </div>
    );
}

export default App;
