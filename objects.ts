//Objects
/*
// One could create a typescript object with defined properties as below
const person: {
    name: string;
    age: number;
} = {
    name: 'Samson',
    age: 33
}

// With the method below, typescript only cares about the created 'person' object
//and does not look deep into its properties
const person: object = {
    name: 'Samson',
    age: 33
}

//by assigning an object with the below method, typescript simply takes it as defined objeect with
//properties type, that should not be change. 
const person = {
    name: 'Samson',
    age: 33
}
*/