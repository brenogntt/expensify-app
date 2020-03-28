import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: expense
});

export const startAddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => { // this is going to return what will be dispatched now. (a function)
  return (dispatch) => { // this is possible because I added that middleware
    
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => { // ref parameter means whatever the sucess resolve of database sends back. THis 'return' is used to set up properly my test case
      dispatch(addExpense({
        id: ref.key,// I have to pass the id to addExpense, and firebase is generating it now
        ...expense
      }));
    });
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
