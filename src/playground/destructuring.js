// const person = {
//     name: 'boop',
//     age: 26,
//     location: {
//         city: 'a city',
//         temp: 17
//     }
// }

// const {name: firstName = 'Anonymous', age} = person

// console.log(`${firstName} is ${age}.`)

// const {city, temp: temperature} = person.location

// if (city && temperature){
//     console.log(`${temperature} is in ${city}.`)
// }


// const book = {
//     title: 'boop',
//     author: 'Boooop',
//     publisher: {
//         name: 'Pood'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

// const address= ['1299 S Boop Booop', 'Philly', 'Pennsyl', '1947'];

// const [/*Skipping this one*/, city, state = 'New York'] = address

// console.log(`You are in ${city} ${state}`)


const item = ['coffee', '€2', '€3', '€5']

const [name, , mediumPrice, ] = item

console.log (`A medium ${name} costs ${mediumPrice} `)