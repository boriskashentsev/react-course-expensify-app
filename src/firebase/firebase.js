import * as firebase from 'firebase'

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config)
const database = firebase.database()

export {firebase, database as default}

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// //database.ref().remove()

// database.ref('expenses').push({
//     description: 'rent',
//     note:'',
//     amount: 100,
//     createdAd: 234
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     })

// database.ref('notes').push({
//     title: 'asjdfklas',
//     body: 'ajsdklfjglpasdf3'
// })

// database.ref('notes/-LG6GJtvYrx7ZCd7buNJ').remove()

// database.ref().set({
//     name: 'Bobo',
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title:'Doer of dos',
//         company: 'Woof'
//     },
//     location: {
//         city: 'Helsinki',
//         country: 'Finland'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed. ',e)
// })

//database.ref().set('this is my data')

// database.ref('age').set(32)
// database.ref('location/city').set('Tampere')

// database.ref('attributes').set({
//     height: 190,
//     weight: 115
// }).then (()=>{
//     console.log('Added my attributes')
// }).catch((e)=>{
//     console.log('Adding Attributes failed', e)
// })

// database.ref('isSingle').remove().then(()=>{
//     console.log('Removed relationship status')
// }).catch(()=>{
//     console.log('Couldn\'t remove the relationship status')
// })

// database.ref().update({
//     name: 'bobs',
//     age: 45,
//     job: 'Doer',
//     isSingle: null
// })

// database.ref().update({
//     job: 'Nondoer',
//     'location/city': 'Tampere'
// })

// database.ref().update({ 
//     stressLevel: 9,
//     'job/company': 'Doof',
//     'location/city': 'Tampere'
// })

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e)=>{
//         console.log('Error fetching data ', e)
//     })

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
// }, (e) => {
//     console.log('Error', e)
// })

// setTimeout(()=>{
//     database.ref('age').set(28)
// }, 3500)

// setTimeout(()=>{
//     database.ref().off('value', onValueChange)
// }, 7000)


// setTimeout(()=>{
//     database.ref('age').set(50)
// }, 10500)

// const onValueChange = database.ref().on('value', (snapshot)=> {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// })

// setTimeout(()=>{
//     database.ref('name').set('bobs')
// }, 3000)

// setTimeout(() => {
//     database.ref().off('value', onValueChange)
// }, 7000);



