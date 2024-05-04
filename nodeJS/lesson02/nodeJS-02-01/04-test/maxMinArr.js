
let array = [6, 2, 1, 8, 10];
let array_tow = [1,1,11,2,3];
//let max = array[0];
//let min = array[0];

// function sumArray(array) {
//     for (let index = 0; index < array.length; index++) {
//         max = array[index] > max ? array[index] : max;
//         min = array[index] < min ? array[index] : min;
//     }
//     let indexToMax = array.indexOf(max); // Находим индекс max элемента
//     array.splice(indexToMax, 1); // Удаляем максимальный элемент из массива
//     let indexToMin = array.indexOf(min); // Находим индекс min элемента
//     array.splice(indexToMin, 1);

//      let result = 0
//     for (const iterator of array) {
//         result +=iterator
//     }
//     return result

// }

sumArray(array);
sumArray(array_tow);

function sumArray(array) {
    // Проверяем, что массив существует и содержит более одного элемента
    if (!array || array.length <= 1) {
        return 0; // Если массив пуст или содержит только один элемент, возвращаем 0
    }
    
    array.sort((a, b) => a - b); // Сортируем массив по возрастанию
    let sum = 0; // Инициализируем переменную для хранения суммы
     
    // Проходим по элементам массива, начиная со второго и заканчивая предпоследним
    for (let i = 1; i < array.length - 1; i++) {
        sum += array[i]; // Добавляем значение элемента к сумме
    }
    
    return sum; // Возвращаем сумму чисел
}

console.log(sumArray([6, 2, 1, 8, 10])); // Вывод: 16
console.log(sumArray([1, 1, 11, 2, 3])); // Вывод: 6
console.log(sumArray([])); // Вывод: 0
console.log(sumArray([5])); // Вывод: 0

