var keys = ['имя', 'возраст', 'город'];
var person = {};

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  person[key] = ''; // Можно присвоить начальное значение или оставить пустой строкой
}

console.log(person); // Выведет: { имя: '', возраст: '', город: '' }