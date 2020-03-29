import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//ref = reference part for a specific part of the database.
// database.ref().set({ // set returns a Promise
//     name: "Breno Gianotto",
//     age: 27,
//     isSingle: false,
//     location: {
//       city: 'Limeira',
//       country: 'Brasil'
//     }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// })

// database.ref('age').set(28);

// database.ref('location/city').set('São Carlos');

// database.ref('attributes').set({
//    heitgh: 184,
//    weigth: 72
//  }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// })

//database.ref('attributes/height').set(184);
//database.ref('attributes/weigth').set(72);

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed.')
// }).catch((e) => {
//   console.log('Data was not removed', e);
// })

//database.ref('isSingle').set(null); //used to remove data as well

// database.ref().update({
//   name: 'Magali Cristina',
//   age: 57,
//   isBeautiful: true,
//   isSingle: null
// });

// database.ref('location/city')
// .once('value') // fetch the data once and if data changes, it will not be updated
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('Error fetching data', e);
// })

// database.ref()
// .on('value', (snapshot) => { // fetch the data and if the data chagnes, it is updated
//   console.log(snapshot.val());
// });

// setTimeout(() => {
//   database.ref('age').set(49);
// }, 3500)

// setTimeout(() => {
//   database.ref().off(); // cancelling the subscription
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(35);
// }, 10500)

// database.ref('notes').push({ // generating id automatically
//   title: 'study react',
//   body: 'PDI'
// })

// database.ref('notes/-M34IOYSnBcdWnZLwe87').remove();

// database.ref('expenses').push({
//   description: 'rent',
//   note: 'You have to pay the rent',
//   amount: 750000,
//   createdAt: 1000
// })

// database.ref('expenses').push({
//   description: 'water bill',
//   note: 'You have to pay the water bill',
//   amount: 44000,
//   createdAt: 1500
// })

// database.ref('expenses').push({
//   description: 'electricity bill',
//   note: 'You have to pay the electricity bill',
//   amount: 185000,
//   createdAt: 2000
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => { // creating a new array bases on returned object from firebase
//     expenses.push({
//       id: childSnapshot.key,// the 'key' field represents the generated id of a node
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses);
// });


// database.ref('expenses')
//  .on('value', (snapshot) => { // fetch the data and if the data chagnes, it is updated
  
//   const expenses = [];
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//      id: childSnapshot.key,
//      ...childSnapshot.val()
//     });
//    })
//    console.log(expenses);
//  });

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// }); // on function does not return a promise
// // I should pass the 'then function' as its second parameter

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });