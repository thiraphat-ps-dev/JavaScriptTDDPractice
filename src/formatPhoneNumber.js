// src/formatPhoneNumber.js
function formatPhoneNumber(str) {
  if (!str) {
    return str;
  }

  const cleaned = ("" + str).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return match[1] + "-" + match[2] + "-" + match[3];
  }

  return str;
}

module.exports = formatPhoneNumber;
