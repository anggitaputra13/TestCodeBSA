let matrix = [
  [11, 2, 4, 3],
  [4, 5, 6, 3],
  [10, 8, 2, 3],
  [4, 5, 6, 3],
];

function penjumlahanMatrix(matrix) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < matrix.length; i++) {
    a += matrix[i][i];
    b += matrix[i][matrix.length - 1 - i];
  }

  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`a + b = ${a + b}`);
}

penjumlahanMatrix(matrix);
