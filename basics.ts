const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number, checker: boolean, message: string): any {
    const summed = num1 + num2;
    if(checker){
        return message + summed;
    } else {
        return message + 0;
    }
}

const booleanValue = true;
const outcome = "What is the outcome? "

button.addEventListener("click", function(){
    console.log(add(+input1.value, +input2.value, booleanValue, outcome))
})

//Trigger errors
/*
//showing errors for unsupported type parameters
button.addEventListener("click", function(){
    console.log(add(input1.value, input2.value))
})

// The below method contains repeatiting
const five:number = 5;
//rather just use the one here, which also means that the type value is strictly 5
const five = 5;
// or use let if the type value could be changed but the type maintained
let five = 5
*/
console.log("lite-server is working ...!");