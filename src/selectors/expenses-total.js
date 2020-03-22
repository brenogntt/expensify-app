const selectExpensesTotal = (expenses) => {
    return expenses.reduce((prevVal, expense) => {
        return prevVal + expense.amount;
    }, 0);
};

export default selectExpensesTotal;