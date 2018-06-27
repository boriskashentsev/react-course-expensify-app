import React from 'react'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

const expenseItem = expenses[0]

test ('Should render ExpenseListItem with expense item', () => {
    const wrapper = shallow (<ExpenseListItem {... expenseItem}/>)
    expect(wrapper).toMatchSnapshot()
})