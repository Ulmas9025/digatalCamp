function getRandomNumber() {
  // Math.random() funksiya orqali 0 va 1 orasida tasodifiy son hosil qilinadi
  // Uning qiymati har safar ishga tushganda o'zgargan bo'ladi
  // Ushbu sonni 100 ga ko'paytirib, ya'ni 0 va 100 orasida hosil qilamiz
  let randomNumber = Math.random() * 100;

  // Math.round() funksiya orqali butun son hosil qilinadi
  // Ushbu funksiya 0 gacha 100 gacha tasodifiy butun son hosil qiladi
  let roundedNumber = Math.round(randomNumber);

  return roundedNumber;
}

// getRandomNumber() funksiyasini chaqirish orqali tasodifiy son olish
let randomNumber = getRandomNumber();
console.log(randomNumber);