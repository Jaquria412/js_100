function localGreet(locale) {
  switch (locale) {
    case locale[3][4] = 'US':
      console.log('Hey!');
      break;
    case locale[3][4] = 'GB':
      console.log('Hello!');
      break;
    case locale[3][4] = 'AU':
      console.log('Howdy!');
      break;
    

  }
}



console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'