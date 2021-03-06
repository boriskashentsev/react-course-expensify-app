import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test ('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test ('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test ('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test ('should edit expense with valid id', () => {
    const updates = {
        description: 'Debit Card'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    }

    const state = expensesReducer(expenses,action)
    expect(state[2].description).toBe(updates.description)
})

test ('should not edit expense with invalid id', () => {
    const updates = {
        description: 'Debit Card'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test ('should set expenses', () => {
    const expense = expenses[1]
    const addInitialExpenseAction = {
        type: 'ADD_EXPENSE',
        expense
    }
    const stateBefore = expensesReducer(expense, addInitialExpenseAction)
    expect(stateBefore).toEqual([expenses[1]])
    const setExpensesAction = {
        type: 'SET_EXPENSES',
        expenses
    }
    const stateAfter = expensesReducer(stateBefore, setExpensesAction)
    expect(stateAfter).toEqual(expenses)
})