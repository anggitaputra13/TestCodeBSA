let kata = 'katak';

function checkPalindrom(kata) {
  let hasil = true;
  let tengah = kata.length / 2;

  for (let i = 0; i <= tengah; i++) {
    if (kata[i] !== kata[kata.length - 1 - i]) {
      hasil = false;
      break;
    }
  }

  return hasil;
}

function checkPalindrom2(kata) {
  let newKata2 = kata.split('').reverse().join('');

  return kata === newKata2;
}

function checkPalindromeRecursive(kata) {
  if (kata.length === 1) return true;
  if (kata.length === 2) return kata[0] === kata[1];
  if (kata[0] === kata.slice(-1)) return checkPalindromeRecursive(kata.slice(1, -1));
  return false;
}

console.log(checkPalindromeRecursive(kata));
// console.log(checkPalindrom2(kata));
// console.log(checkPalindrom(kata));
