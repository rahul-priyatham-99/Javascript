const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        const seatNumber = parseInt(input[i]);
        const output = findFacingSeat(seatNumber);
        console.log(output);
    }
});

function findFacingSeat(seatNumber) {
    let row = Math.ceil(seatNumber / 6);
    let seatInRow = seatNumber % 6;
    let facingSeat = 0;
    let seatType = "";

    if (seatInRow % 6 === 1 || seatInRow % 6 === 0) {
        seatType = "WS";
    } else if (seatInRow % 6 === 5 || seatInRow % 6 === 2) {
        seatType = "MS";
    } else {
        seatType = "AS";
    }

    if (row % 2 !== 0) {
        if (seatInRow === 1) {
            facingSeat = seatNumber + 11;
        } else if (seatInRow === 2) {
            facingSeat = seatNumber + 9;
        } else if (seatInRow === 3) {
            facingSeat = seatNumber + 7;
        } else if (seatInRow === 4) {
            facingSeat = seatNumber + 5;
        } else if (seatInRow === 5) {
            facingSeat = seatNumber + 3;
        } else if (seatInRow === 0) {
            facingSeat = seatNumber + 1;
        }
    } else {
        if (seatInRow === 0) {
            facingSeat = seatNumber - 11;
        } else if (seatInRow === 5) {
            facingSeat = seatNumber - 9;
        } else if (seatInRow === 4) {
            facingSeat = seatNumber - 7;
        } else if (seatInRow === 3) {
            facingSeat = seatNumber - 5;
        } else if (seatInRow === 2) {
            facingSeat = seatNumber - 3;
        } else if (seatInRow === 1) {
            facingSeat = seatNumber - 1;
        }
    }

    let result = facingSeat.toString() + " " + seatType;
    return result;
}

const inputData = { a: 1, b: 2, c: 3 };
let output = []
for (x in inputData) {
    let temp = {}
    temp[x] = inputData[x]
    output.push(temp)
}
console.log(output)

const input2 = [{ a: 1, a: 5 }, { b: 2 }, { c: 3 }]
let output2 = {}
for (i = 0; i < input2.length; i++) {
    let keysArray = Object.keys(input2[i])
    console.log(keysArray)
    for (x of keysArray) {
        output2[x] = input2[i][x]
    }
}
console.log(output2)