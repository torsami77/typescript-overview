/*
enum Role { ADMIN, READ_ONLY, AUTHOR };
console.log(Role.ADMIN) // will return 0
console.log(Role.READ_ONLY) // will return 1
console.log(Role.AUTHOR) // will return 2
*/
// To change the default enum values, 
//use the method below to assign custom values
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR };
const person = {
    name: 'Samson',
    age: 33,
    hobbies: ['sports', 'cooking'],
    // role: [2, 'author'] // instead of this
    role: Role.AUTHOR // could be used
};

console.log(Role.ADMIN) // will return ADMIN
console.log(Role.READ_ONLY) // will return 100
console.log(Role.AUTHOR) // will return 101