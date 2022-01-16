//you can use union types with '|' to list expected types
function combine(n1:number | string, n2:number | string | boolean){
    let result;
    //const result = n1 + n2;// this will result to error because the types are not certain
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        // the check above makes the block below works because typescript is certain both values will be number
        result = n1 + n2;
    } else {
        result = n1.toString() + n2; //else because one or more value is a string
    }
    return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);