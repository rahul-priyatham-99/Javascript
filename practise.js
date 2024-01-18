// // function syntax
// function doSomething(){
//     console.log("okay")
// }

// // ES6 Arrow Function syntax
// const somethingFunc = (a, b) => {
//     return a * b
// }
// output = somethingFunc(10, 15)

// // sorting with a for loop
// let nums = [20, 10, 15, 25, 35]
// for (i=0; i<nums.length-1; i++) {
//     for (j=i+1; j<nums.length-1; j++)
//     if (nums[i] > nums[j]){
//         var temp = nums[j]
//         nums[j] = nums[i]
//         nums[i] = temp       
//     }
// }

// // sorting with inbuilt sort() method
// let test = [88,888,2666,3,5,6]
// sorted_array = test.sort((a,b) => a-b)

// // binary search
// function binary_search (int_array, k) {
//     left = 0
//     right = int_array.length - 1
//     while (left<=right){
//         mid = Math.floor((left + right) / 2)
//         if (int_array[mid] === k){
//             return mid
//         } else if (k < int_array[mid]) {
//             right = mid-1
//         } else if (k > int_array[mid]) {
//             left = mid +1
//         }
//     }
//     return -1
// }

// // ternary search
// const ternary_search = (int_array, k) => {
//     var left = 0
//     var right = int_array.length - 1
//     while (left<= right){
//         let mid1 = left + Math.floor((right - left)/3)
//         let mid2 = right - Math.floor((right - left)/3)
//         if (int_array[mid1] === k){
//             return mid1
//         } 
//         if (int_array[mid2] === k) {
//             return mid2
//         } 
//         if (k < int_array[mid1]) {
//             right = mid1 - 1
//         } else if (k > int_array[mid2]){
//             left = mid2 + 1
//         } else {
//             left = mid1 + 1
//             right = mid2 - 1
//         }
//     }
//     return -1
// }
// let key = 30
// new_arr = [10, 20, 30, 40]
// output = ternary_search(new_arr, key)
// console.log("ternary_search_output:",output)

// const example = ((...args)=> {
//     console.log(args)
//     return args
// })

// let int_array_example = [1, 2, 3, 4, 5]
// out_example = example(...int_array_example)
// console.log(out_example)

// const person = {
//     'name': 'c',
//     'age': 20,
//     'lname': 'last'
// }
// const {name, age, lname=10} = person
// console.log(lname)

// const [a, b] = [10, 20]
// console.log(a)


const factorial = (num) => {
    let factorial = 1
    for (i = num; i >= 1; i--) {
        factorial = factorial * num;
    }
    return factorial;
}
const output = factorial(5)
// console.log(output)

// function x() {
//     setTimeout(function () {
//         console.log(i)
//     }, 3000)
//     var i = 1;
// }
// x()

// console.log(1)
// setTimeout(function () {
//     console.log(2)
// }, 1000)
// setTimeout(function () {
//     console.log(3)
// }, 0)
// console.log(4)

data =
    [
        {
            "name": "Menu 1",
            "link": "Google.com",
            "subItems": [
                {
                    "name": "Menu2",
                    "link": "linkedin.com"
                }
            ]
        },
        {
            "name": "Menu 3",
            "link": "Google.com",
            "subItems": [
                {
                    "name": "Menu4",
                    "link": "linkedin.com"
                },
                {
                    "name": "Menu5",
                    "link": "linkedin.com"
                },
                {
                    "name": "Menu6",
                    "link": "linkedin.com"
                }
            ]
        }
    ]


let new_arr = []
for (i = 0; i < data.length; i++) {
    new_arr.push(data[i]?.name)
    if (data[i].subItems.length > 0) {
        for (x = 0; x < data[i].subItems.length; x++) {
            console.log(data[i].subItems[x].name)
            new_arr.push(data[i].subItems[x].name)
        }
    }
}

console.log(new_arr)

console.log(1 + "2")
console.log([... "rahul"])

let string = "Rahul"

for (i = 0; i < string.length; i++) {
    console.log(string[i])
}


const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
    console.log(number * 2);
    return numbers
});

console.log(numbers)