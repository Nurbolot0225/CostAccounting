import './CostDate.css'

function CostDate() {
    return (
        <div className='cost-date'>
            <div className='cost-date__month'>{new Date().toLocaleString('ru-RU', {
                month: 'long'
            })}</div>
            <div className='cost-date__year'>{new Date().getFullYear()}</div>
            <div className='cost-date__day'>{new Date().getDate()}</div>
        </div>
    )
}

export default CostDate