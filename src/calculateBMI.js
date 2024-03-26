// src/calculateBMI.js
function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return null;
  }

  const bmi = weight / (height * height);
  return parseFloat(bmi.toFixed(2));
}

module.exports = calculateBMI;
