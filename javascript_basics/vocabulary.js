let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i++) {
  // console.log(vocabulary[i]); //  ['happy', 'cheerful', 'merry', 'glad']
  const sub = vocabulary[i];
  for (let l = 0; l < sub.length; l++) {
    console.log(sub[l]);
  }
}

