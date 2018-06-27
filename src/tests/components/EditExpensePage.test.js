import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper, oldExpense, newExpense

beforeEach(()=> {
    oldExpense = expenses[0]
    newExpense = expenses[1]
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage editExpense = {editExpense} removeExpense = {removeExpense} history = {history} expense={oldExpense}/>)
})

test ('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test ('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(newExpense)
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(oldExpense.id, newExpense)
})

test ('should handle removeExpense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith({id: oldExpense.id})
})