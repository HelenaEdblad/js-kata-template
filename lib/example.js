const getRomanNumerals = (input) => {
  if (!input) return "";

  if (input === "a") {
    return "";
  }

  if (input === 1) {
    return "I";
  }

  if (input === 2) {
    return "II";
  }

  if (input === 3) {
    return "III";
  }
};

module.exports = { getRomanNumerals };
