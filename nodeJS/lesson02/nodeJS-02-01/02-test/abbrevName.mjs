function abbrevName(name) {
    // Разбиваем имя на слова
    const words = name.split(" ");
    // Получаем первую букву каждого слова и переводим ее в верхний регистр
    const initials = words.map(word => word.charAt(0).toUpperCase()); 
    return console.log(initials.join('.'));
}

abbrevName('abbos qosimov')


// const str = "JavaScript is awesome";
// const words = str.split(" "); // Разбиваем строку по пробелам
// console.log(words); // Вывод: ["JavaScript", "is", "awesome"]

// const csv = "apple,banana,orange";
// const fruits = csv.split(","); // Разбиваем строку по запятой
// console.log(fruits); // Вывод: ["apple", "banana", "orange"]
