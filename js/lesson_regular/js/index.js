const username = prompt("Iltimos, foydalanuvchi ismingizni kiriting:");
const email = prompt("Elektron pochtangizni kiriting:");
const password = prompt("Parolingizni kiriting:");

if (username && email && password) {
  console.log("Foydalanuvchi ismi:", username);
  console.log("Elektron pochta:", email);
  console.log("Parol:", password);
} else {
  alert("Xatolik: Ma'lumotlar kiritilmadi!");
}