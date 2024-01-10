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





