function repeat(num, word) {
  let repetitions = '';

  while (num > 0) {
    repetitions += word;
    num -= 1;
  }

  return repetitions;
}
console.log(repeat(3, 'ha'));