var items = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

const output = items.reduce((result, item) => {
  let categoryEntry = result.find(entry => entry.category_name === item.category);
  console.log(categoryEntry)

  if (!categoryEntry) {
    categoryEntry = {
      category_name: item.category,
      items: []
    };
    result.push(categoryEntry);
  }
  categoryEntry.items.push({
    price: item.price,
    stocked: item.stocked,
    name: item.name
  });
  return result;
}, []);

console.log(output);

const filteredItems = output.map(category =>
  ({ ...category, items: category.items.filter(item => item.stocked) })
);
console.log(filteredItems);

const data = [
  { 'firstName': 'Rahul', "age": 22, "location": "AP" },
  { 'firstName': 'BSS', "age": 24, "location": "KA" },
  { 'firstName': 'Virat', "age": 25, "location": "TN" },
  { 'firstName': 'Sai', "age": 26, "location": "AP" }
]

const dataWithReduce = data.reduce((result, item) => {
  if(item.age > 22) {
    result.push(item.firstName)
  } 
  return result;
}, [])

console.log(dataWithReduce)


const cart = ["shirt", "pant"]

const validateCart = (cart) => {
  if (cart.length > 0) {
    return true;
  } else {
    return false;
  }
}

const payment = (orderId) => {
  if (orderId !== null) {
    return true;
  } else {
    return false
  }
}

const order = (paymentInfo) => {
  if (paymentInfo !== null) {
    return true;
  } else {
    return false;
  }
}

const wallet = (orderStatus) => {
  if (orderStatus === "successfully order placed") {
    return true;
  } else {
    return false;
  }
}


const createOrder = (cart) => {
  const orderId = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart is empty")
      console.log(err)
      reject(err)
    } else {
      const orderId = 12345
      setInterval(() => {
        resolve(orderId)
      }, 5000)
    }
  })
  return orderId;
}

const proceedToPayament = (orderId) => {
  const paymentInfo = new Promise((resolve, reject) => {
    if (payment(orderId)) {
      let paymentInfo = "okay"
      console.log(paymentInfo)
      resolve(paymentInfo)
    } else {
      const err = new Error("some error in payment")
      console.log(err)
      reject(err)
    }
  })
  return paymentInfo;
}

const showOrderSummary = (paymentInfo) => {
  const orderSummary = new Promise((resolve, reject) => {
    if (order(paymentInfo)) {
      let orderStatus = "successfully order placed"
      console.log(orderStatus)
      resolve(orderStatus);
    } else {
      const error = new Error("order not placed")
      console.log(error)
      reject(error)
    }
  })
  return orderSummary
}

const updateWallet = (orderSummary) => {
  const walletBa = new Promise((resolve, reject) => {
    if (wallet(orderSummary)) {
      let walletBalance = 200;
      console.log(walletBalance)
      resolve(walletBalance)
    } else {
      const error = new Error(500)
      console.log(error)
      reject(error)
    }
  })
  return walletBa;
}


createOrder(cart)
  .then((orderId) => {
    console.log(orderId)
    return orderId
  })
  .then((orderId) => {
    return proceedToPayament(orderId)
  })
  .then((paymentInfo) => {
    return showOrderSummary(paymentInfo)
  })
  .then((orderSummary) => {
    return updateWallet(orderSummary)
  })
  .catch((error) => {
    console.log(error)
  })


