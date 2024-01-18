// call, apply, bind()
let personName = {
    "firstName": "Rahul",
    "lastName": "Priyatham",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
personName.fullName()

let personName2 = {
    "firstName": "Virat",
    "lastName": "Kohli"
}
personName.fullName.call(personName2);

let name = {
    "firstName": "Rahul",
    "lastName": "Priyatham",
}
let fullName = function (hometown, country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + country)
}
fullName.call(name, "Bangalore", "India")
fullName.apply(name, ["Bangalore", "India"])
let fullNamwWithBind = fullName.bind(name, "Bangalore", "India")
fullNamwWithBind();

let name2 = {
    "firstName": "Virat",
    "lastName": "Kohli"
}
fullName.call(name2, "Delhi", "India");
fullName.apply(name2, ["Delhi", "India"])
let fullNamwWithBind2 = fullName.bind(name2, "Delhi", "India")
fullNamwWithBind2();


// currying
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(add(1)(2)(3));

// Reversing a string
const str = "sai"
let new_string = "" 
for (i=str.length-1; i>=0; i--){ //reversing a string by basic for loop
    new_string += str[i]; 
}
console.log(new_string)



const str1 = "Geeks for Geeks"; // reversal by split() and reduce()
const split_string = str1.split("")
console.log(split_string, typeof split_string)
const reverse = split_string.reduce((result, item) => {
    result = item + result 
    return result
}, "")
console.log("e"+"G") // result + item
console.log("G"+"e") // item + result
console.log(reverse);


const str2 = "kohli";
const str2_split = str2.split("") 
const rev_str2 = str2_split.reverse()
const reversed_str = rev_str2.join("")
console.log(reversed_str)
console.log(typeof reversed_str)


// Object.entries()
let sample_obj = {
    "name" : "Sai",
    "age" : 23
}

const entries = Object.entries(sample_obj)
console.log("entries:", entries) 
// entries = [
//     ["name", "Sai"],
//     ["age", "23"]
// ]

const withoutEntries = (obj) => {
    const objKeys = Object.keys(obj)
    console.log(objKeys)
    const values = objKeys.map((key)=> {
        const value = obj[key]
        return [key, value]
    })
    return values
}

const ent = withoutEntries(sample_obj)
console.log(ent)



