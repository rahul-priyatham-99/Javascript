cart = ["shirt", "pant"]
const validateCart = (cart) => {
    if (cart.length > 0) {
        return true;
    }
    return false;
}

const createOrder = (cart) => {
    const orderId = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error("cart is empty")
            reject(err)
        } else {
            const orderId = "899"
            setTimeout(() => {
                resolve(orderId)
            }, 5000)
        }
    })
    return orderId;
}

const proceedToPayament = (orderId) => {
    const paymentInfo = new Promise((resolve, reject) => {
        resolve("payment successful")
    })
    return paymentInfo;
}

const promise = createOrder(cart);
console.log("promise:", promise)

promise
    .then((orderId) => {
        console.log(orderId)
        return orderId
    })
    .then((orderId)=> {return proceedToPayament(orderId)})
    .then((paymentInfo) => console.log(paymentInfo))
    .catch((error)=> console.log(error))


