// src/transFormPhoneNumber.js
function transFormPhoneNumber(str) {
  if (!str) {
    return str;
  }

  const cleaned = ("" + str).replace(/\D/g, "");
  const match = cleaned.match(/^0(\d{2})(\d{3})(\d{4})$/);
  if (match) {
    return "(+66)" + match[1] + " " + match[2] + " " + match[3];
  }

  return str;
}

module.exports = transFormPhoneNumber;
