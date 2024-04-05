function digitalRoot(n) {
    // Raqamlarni massivga aylantiramiz
    let digits = n.toString().split("").map(Number);
    // Massivdagi raqamlar yig'indisini hisoblaymiz
    let sum = digits.reduce((acc, curr) => acc + curr, 0);
    // Agar yig'indi 10 dan katta bo'lsa, uni ham hisoblashimiz kerak
    if (sum >= 10) {
        return digitalRoot(sum);
    } else {
    // Agar yig'indi 10 dan kichik bo'lsa, uni qaytarib beramiz
        return sum;
    }
}

console.log(digitalRoot(942));    // 6
console.log(digitalRoot(45454)); 