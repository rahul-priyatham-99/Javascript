const promise_one = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise_one")
        resolve()
    }, 1000)
})
promise_one.then(() => {
    console.log("consumed promise_one")
}).catch(() => {
    console.log("not consumed")
})

const promise_two = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise_two")
        resolve([1, 2, 3])
    }, 2000)
})
promise_two.then((data) => {
    console.log("Consumed promise_two:", data)
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise_three")
        resolve({ "name": "Rahul", "age": 24 })
    }, 3000)
}).then((data) => {
    console.log("consumed promise_three:", data)
})

const promise_four = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        console.log("promise_four")
        if (!error) {
            resolve(["promise_four_data"])
        } else {
            reject()
        }
    }, 4000);
})
promise_four.then((data) => {
    console.log("consumed_promise_four:", data)
}).catch(() => {
    console.log("rejected promise_four")
})

const promise_five = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ "user": "Rahul", "email": "rahul@gmail.com" })
    } else {
        reject("rejected")
    }
})

const custom_promise = async() => {
    try {
        const response = await promise_five
        console.log(response)
    } catch(error){
        console.log(error)
    }
}
custom_promise()

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:", error)
    }
}
fetchUsers()