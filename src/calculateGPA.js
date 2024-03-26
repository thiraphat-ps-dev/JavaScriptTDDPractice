// src/calculateGPA.js
function calculateGPA(grades, credits) {
  if (grades.length === 0 || grades.length !== credits.length) {
    return null;
  }

  const totalCredits = credits.reduce((a, b) => a + b, 0);
  const weightedGrades = grades.map((grade, index) => grade * credits[index]);
  const totalWeightedGrades = weightedGrades.reduce((a, b) => a + b, 0);

  const gpa = totalWeightedGrades / totalCredits;
  return parseFloat(gpa.toFixed(2));
}

module.exports = calculateGPA;
