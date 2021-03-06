import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    onSubmit = {this.onSubmit}
                    expense = {this.props.expense}
                />
                <button onClick = {this.onClick}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense: (id, expense) => {dispatch(startEditExpense(id, expense))},
        removeExpense: ({id}) => {dispatch(startRemoveExpense({id}))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)