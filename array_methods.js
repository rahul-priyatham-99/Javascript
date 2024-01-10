//map()
/* This method creates a new array by calling a function on every element 
of the original array and storing the results in a new array */
sample_int_array = [10, 29, 9, 12, 13]
const mapped_elements = sample_int_array.map((item) => {
    return item + 1
})
console.log("mapped_elements:", mapped_elements)

mapped_elements_with_for_loop = []
for (i = 0; i < sample_int_array.length; i++) {
    new_item = sample_int_array[i] + 1
    mapped_elements_with_for_loop.push(new_item)
}
console.log("mapped_elements_with_for_loop:", mapped_elements_with_for_loop)

//forEach()
/* The forEach() method is primarily used for iterating over array 
elements and executing a provided function once for each array element. 
It doesn’t create a new array and doesn’t return anything. 
It’s mainly used when you want to perform an operation on each element of the array 
without creating a modified version of the array */
sample_int_array.forEach((item) => {
    console.log(item * 10)
})
console.log(sample_int_array)

//sort()
/* sort method is used to perform the sorting of an given array in asc or desc order */
let sorted_array = []
sorted_array = sample_int_array.sort((a, b) => {
    a - b
})
console.log("sorted_array:", sorted_array)

let sort_array = [20, 10, 15, 12, 10]
for (let i = 0; i < sort_array.length; i++) {
    for (let j = i + 1; j < sort_array.length; j++) {
        if (sort_array[i] > sort_array[j]) {
            var temp = sort_array[j]
            sort_array[j] = sort_array[i]
            sort_array[i] = temp
        }
    }
}
console.log("sample_int_array with for:", sort_array)

//reduce()
/* reduce() method is used to reduce the array to a single value and 
executes a provided function for each value of the array (from left to right) and 
the return value of the function is stored in an accumulator. */
let sample = [10, 212, 22, 29]
const sum = sample.reduce((a, b) => {
    return a + b;
}, 2)
console.log("sum:", sum)

let arr = [1, 33, 4, 4]
arr_sum = 0
for (i=0; i< arr.length; i++){
    arr_sum += arr[i]
}
console.log("arr_sum:", arr_sum)

//flat()
/* It is used to flatten an array, to reduce the nesting of an array. 
The flat() method is heavily used in the functional programming paradigm of JavaScript.*/
let details = [{ 'name': 'raju' }, { 'name': 'harish' }, [10]]
const output = details.flat()
console.log("details with flat():", output)

let input_flat_arry = [['1', '2'], ['3', '4', ['5', ['6'], '7']]]
function customFlat(arr) {
    let flattenedArray = [];
    function flattenHelper(array) {
        for (let element of array) {
            if (Array.isArray(element)) {
                flattenHelper(element);
            } else {
                flattenedArray.push(element);
            }
        }
    }
    flattenHelper(arr);
    return flattenedArray;
}
const nestedArray = [1, [2, [3, 4], 5], 6]
const result = customFlat(nestedArray)
console.log("flattened array",result)

//slice()
/*slice method returns a piece of the array but it doesn't affect the original array*/
let input_array = [1,2,4,'rahul', 'sai', '33', {'name': 'sai'}]
const sliced_array = input_array.slice(3,7)
console.log("sliced array", sliced_array)

//splice()
/* splice method is used to modify the contents of an array by removing the existing elements and/or by adding new elements*/
input_array.splice(2, 1, [22, 24])
console.log("spliced_array:", input_array)

//shift()
/* shift() method removes the first element of the array thus reducing the size of the original array by 1.
shift method is opposite to pop() method as pop() method removes the last element in an array 
while shift removes the first element */
input_array.shift()
console.log("shifted_array:", input_array)

//unshift()
/* unshift() method is used to add one or more elements to the beginning of the given array
unshift is similar to push() method as push() method inserts the element at the ending where as
unshift adds elements at the beginning */
let new_array = [{'name': 'sai'}, 888, 'rahul', '666', 1111]
let new_length = new_array.unshift({'test': 'okay'})
console.log("unshifted_array:", new_array)
console.log("new length after unshifting:", new_length)


//push()
/* push() method is used to add one or more values to the end of the array. 
This method changes the length of the array by the number of elements added to the array */
new_array.push(1,33, {"sam": "cs"})
console.log("array upon performing push method:", new_array)

//pop()
/* pop() method is used to remove the element at the end*/
new_array.pop()
console.log("array upon performing pop method:", new_array)