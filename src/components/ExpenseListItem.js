import React from 'react'
import {Link} from 'react-router-dom'

// const ExpenseListItem = (props) => (
//     <div>
//         <p>description: {props.expense.description} amount: {props.expense.amount} created at {props.expense.createdAt}</p>
//     </div>
// )

const ExpenseListItem = ({description, amount, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem