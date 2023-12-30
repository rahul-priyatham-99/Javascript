setTimeout(() => {
    console.log("timer")
}, 1000)

const x = (callback_func) => {
    console.log("x")
    callback_func()
}

const y = () => {
    console.log("y")
}

x(y)

const additionLogic = ((arr) => {
    let add = 0
    for (i = 0; i < arr.length; i++) {
        add = add + arr[i]
    }
    console.log(add)
})

const main_func = ((callback) => {
    setTimeout(() => {
        callback([1, 2, 3])
    })
})

main_func(additionLogic)

const step1 = ((value, callback) => {
    callback(value + 10, false)
})

const step2 = ((value, callback) => {
    callback(value + 10, false)
})

const step3 = ((value, callback) => {
    callback(value + 10, false)
})

step1(10, (result1, error) => {
    if (!error) {
        step2(result1, (result2, error) => {
            if (!error) {
                step3(result2, (result3, error) => {
                    if (!error) {
                        console.log("Results:", result3)
                    }
                })
            }
        })
    }
})