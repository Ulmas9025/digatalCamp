const binaryArrayToNumber = arr => {
    let result = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] * Math.pow(2, arr.length - 1 - i);
    }
    return result;
};

console.log("Тестирование: [0, 0, 0, 0] ==> " + binaryArrayToNumber([0, 0, 0, 0])); // 0
console.log("Тестирование: [1, 0, 0, 0] ==> " + binaryArrayToNumber([1, 0, 0, 0])); // 8
console.log("Тестирование: [0, 1, 0, 0] ==> " + binaryArrayToNumber([0, 1, 0, 0])); // 4
console.log("Тестирование: [1, 0, 0, 1] ==> " + binaryArrayToNumber([1, 0, 0, 1])); // 9
console.log("Тестирование: [0, 1, 1, 0] ==> " + binaryArrayToNumber([0, 1, 1, 0])); // 6
console.log("Тестирование: [1, 1, 1, 1] ==> " + binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log("Тестирование: [1, 0, 1, 1] ==> " + binaryArrayToNumber([1, 0, 1, 1])); // 11