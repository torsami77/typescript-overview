//Arrays
/*
const person = {
    name: 'Samson',
    age: 33,
    hobbies: ['sports', 'cooking'],
}
*/
//array of strings type
//let favoritesActivities: string[];
//The attempt to assign a string to an array type below generates an error.
//favoritesActivities = 'sports';

//The below attempt to add a 'non-string' type to the array of string types also geenrates error  
//favoritesActivities = ['sports', 1]

//To enable all types in array, define array with any as below
//let favoritesActivites: any[];
//favoritesActivites = ['sports', 1]

//To provide specific array items type, use below method
//let favoritesActivites: [string, number, boolean]
//let favoritesActivites: [any, object, any[]]; //tuple


/*
const person = {
    name: 'Samson',
    age: 33,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
}

//Typescript detects that hobbies of person is an array of strings
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! ERROR typescript detects you can't map a string
}

// Below steps will work because typescript doesn't see that we want 2 items of number and string types 
//in the 'role' array
person.role.push('admin');
person.role[1] = 10;
*/
// To fix that, role type should be defined as tuple as below
/*
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Samson',
    age: 33,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
*/
//console.log(person.name)