// src/findSecondMax.js
function findSecondMax(arr) {
  if (arr.length < 2) {
    return undefined;
  }

  let max = arr[0] > arr[1] ? arr[0] : arr[1];
  let secondMax = arr[0] > arr[1] ? arr[1] : arr[0];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

module.exports = findSecondMax;
