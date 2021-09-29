function sumEvenNumbers(arr) {
  if (Array.isArray(arr) && arr.length == 2) {
    let hight = arr[0] > arr[1] ? arr[0] : arr[1];
    let low = arr[0] > arr[1] ? arr[1] : arr[0];
    let sumEven = 0;
    if (typeof low === 'number' && typeof hight === 'number') {
      for (let i = low + 1; i < hight; i++) {
        if (i % 2 == 0) sum += i;
      }
    } else return 'Please sand an array of 2 numbers';
  }
  return 'Please sand an array of 2 numbers';
}
