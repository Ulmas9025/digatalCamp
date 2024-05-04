
let arr = [2,5,38,2,1];

const reverseSeq = n => {
   // Создаем массив с длиной n, заполненный значениями от 0 до n - 1
   const array = Array.from({ length: n }, (_, i) => i);
    
   // Меняем значения элементов на n - i для получения значений от n до 1
   return array.map((value, index) => n - index);
};

console.log(reverseSeq(100));