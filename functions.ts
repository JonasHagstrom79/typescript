/**
 * Squeares a number
 * @param num number to be squared
 * @returns 
 */
function square(num: number){
    return num * num; 
}

function greet(person: string = "Default value") {
    return "Hello " + person;
}

// Creating a function with a return type
const addNums = (x: number, y: number): number => {
    return x + y;
}

const add = (x: number, y: number): number => {
    return x + y; }
