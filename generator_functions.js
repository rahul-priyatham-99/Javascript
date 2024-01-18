function printValues(){
    return 10;
    return 20;
}

const output = printValues()
console.log(output) // We can't get 20 value since function execution stops after first return statement

// Generator functions
function* generatorFunc(){
    yield 10;
    yield 20;
}

const result = generatorFunc();
console.log(result.next().value); //10
console.log(result.next().value); //20
console.log(result.next().value); //undefined
