import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'

// const now = moment()
// console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        if (props.expense) {
            this.state = {
                description: props.expense.description,
                note: props.expense.note,
                amount: (props.expense.amount / 100).toString(),
                createdAt: moment(props.expense.createdAt),
                calendarFocused: false,
                error: '',
                submitButtomText: 'Save Change'
            }
        }
        else {
            this.state = {
                description: '',
                note: '',
                amount: '',
                createdAt: moment(),
                calendarFocused: false,
                error: '',
                submitButtomText: 'Add Expense'
            }
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({amount}))
        }
    } 

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error:'Please provide description and amount.'}))
        }
        else {
            this.setState(() => ({error:''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    
    render () {
        return (
            <div>
                {this.state.error!=='' && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value = {this.state.description}
                        onChange= {this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value = {this.state.amount}
                        onChange = {this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange = {(day) => false}
                    />
                    <textarea placeholder="Add a note (optional)"
                        value = {this.state.note}
                        onChange = {this.onNoteChange}    
                    >
                    </textarea>

                    <button>{this.state.submitButtomText}</button>
                </form>
            </div>
        )
    }
}