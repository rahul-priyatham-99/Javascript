// High order functions
/* 
A function which takes another function as an argument/input or returns another function is known as higher order functions, 
the functions which are passed as an argument are known as callback functions since they are called back after sometime in the function.

Tips: Always break the given task into smaller functions and use this smaller functions as an input to another function to returns the solution.
Examples of HOF : map(), filter(), reduce() etc.
*/


const calculate_area = ((radius) => {
    return Math.round(Math.PI * radius * radius)
})

const calculate_dia = ((radius) => {
    return 2 * radius
})

const calculate_circumference = ((radius) => {
    return Math.round(2 * Math.PI * radius)
})

const calculate_hof = ((radius, find_dia, find_area, find_circum) => {
    let output = { 'diameter': 0, 'area': 0, 'circumference': 0 }
    output.diameter = find_dia(radius)
    output.area = find_area(radius)
    output.circumference = find_circum(radius)
    return output
})

const hof_out = calculate_hof(10, calculate_dia, calculate_area, calculate_circumference)
console.log("calculate with hof:", hof_out)


const sample_hof = ((radius_array) => {
    let result_array = []
    for (i = 0; i < radius_array.length; i++) {
        result_array.push(calculate_area(radius_array[i]))
    }
    return result_array
})

radius_arr = [10, 20, 30, 40]
let hof_area = sample_hof(radius_arr)
console.log("result_array:", hof_area)
console.log("hof_map:", radius_arr.map(calculate_area))