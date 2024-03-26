// src/calculatePercentage.js
function calculatePercentage(part, total) {
  if (total <= 0) {
    return null;
  }

  const percentage = (part / total) * 100;
  return parseFloat(percentage.toFixed(2));
}

module.exports = calculatePercentage;
