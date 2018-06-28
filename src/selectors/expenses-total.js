const selectExpensesTotal = (expenses) => {
    if (!expenses) {
        return 0
    }
    else if (expenses.amount) {
        return expenses.amount
    }
    else {
        const reducer = (accumulator, expense) => accumulator + expense.amount
        return expenses.reduce(reducer, 0)
    }
}

export default selectExpensesTotal