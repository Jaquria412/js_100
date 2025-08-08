function extractLanguage(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}


console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'