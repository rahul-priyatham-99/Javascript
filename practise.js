// function syntax
function doSomething(){
    console.log("okay")
}

// ES6 Arrow Function syntax
const somethingFunc = (a, b) => {
    return a * b
}
output = somethingFunc(10, 15)

// sorting with a for loop
let nums = [20, 10, 15, 25, 35]
for (i=0; i<nums.length-1; i++) {
    for (j=i+1; j<nums.length-1; j++)
    if (nums[i] > nums[j]){
        var temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp       
    }
}

// sorting with inbuilt sort() method
let test = [88,888,2666,3,5,6]
sorted_array = test.sort((a,b) => a-b)

// binary search
function binary_search (int_array, k) {
    left = 0
    right = int_array.length - 1
    while (left<=right){
        mid = Math.floor((left + right) / 2)
        if (int_array[mid] === k){
            return mid
        } else if (k < int_array[mid]) {
            right = mid-1
        } else if (k > int_array[mid]) {
            left = mid +1
        }
    }
    return -1
}

// ternary search
const ternary_search = (int_array, k) => {
    var left = 0
    var right = int_array.length - 1
    while (left<= right){
        let mid1 = left + Math.floor((right - left)/3)
        let mid2 = right - Math.floor((right - left)/3)
        if (int_array[mid1] === k){
            return mid1
        } 
        if (int_array[mid2] === k) {
            return mid2
        } 
        if (k < int_array[mid1]) {
            right = mid1 - 1
        } else if (k > int_array[mid2]){
            left = mid2 + 1
        } else {
            left = mid1 + 1
            right = mid2 - 1
        }
    }
    return -1
}
let key = 3
output = ternary_search(new_arr, key)
console.log("ternary_search_output:",output)
