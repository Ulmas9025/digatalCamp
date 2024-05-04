function compareArrays(arr1, arr2) {
  for (let element1 of arr1) {
    for (let element2 of arr2) {
      if (element1 === element2) {
        return true; // Agar 2 massivda bir xil element topilsa, true qaytariladi
      }
    }
  }
  return false; // Agar 2 massivda bir xil element topilmasa, false qaytariladi
}

// Masalan
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9];

console.log(compareArrays(array1, array2)); // false
