import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if empty input', () => {
    expect(selectExpensesTotal()).toBe(0)
})

test('should return 0 if empty array input', () => {
    expect(selectExpensesTotal([])).toBe(0)  
})

test('should correctly add up a single expense', () => {
    expect(selectExpensesTotal(expenses[1])).toBe(expenses[1].amount)
})

test('should correctly add up a single expense in an array', () => {
    expect(selectExpensesTotal([expenses[1]])).toBe(expenses[1].amount)
})

test('should correct add up multiple expenses', () => {
    var sum = 0
    for (var i = 0; i < expenses.length; i++) {
        sum += expenses[i].amount
    }
    expect(selectExpensesTotal(expenses)).toBe(sum)
})