import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done)=>{
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt}
    })
    database.ref('expenses').set(expensesData).then(()=>{done()})
})

test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', {a: 'a', b: 2, c: undefined})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {a: 'a', b: 2, c: undefined}
    })
})

test('should set up add expense action objet with values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

// test('should set up add expense action objet with default values', () => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: '',
//             id: expect.any(String)
//         }
//     })
// })

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 2300,
        createdAt: 1000,
        note: 'Good mouse'
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        database.ref(`expenses/${snapshot.key}`).remove()
        done()
    }).catch ((e) => {
        console.log(e)
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        })
        database.ref(`expenses/${snapshot.key}`).remove()
        done()
    }).catch ((e) => {
        console.log(e)
    })
})

test('should setup set expense action object with data', ()=>{
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', ()=>{
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then((done)=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
    })
})