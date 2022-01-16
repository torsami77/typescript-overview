//you can use union types with '|' to list expected types
//Alias are customs types that could created using the type keyword
type Combine = number | string; //could be just---   type Combine = number 
type conversionDescriptor = 'as-number' | 'as-text'  //literal types combine with unnion

function combine(
    input1: Combine,
    input2: Combine,
    resultConversion: conversionDescriptor
){
    let result;
    //const result = n1 + n2;// this will result to error because the types are not certain
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        // the check above makes the block below works because typescript is certain both values will be number
        //And had to add the '+' to ennsure that the values below got converted to number type
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2; //else because one or more value is a string
    }
    return result;
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
