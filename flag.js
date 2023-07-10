// Converts country code (ISO 3166-1) to its emoji flag representation (MA -> 🇲🇦).
// 0x1F1E5 =>  Base code point for flag emojis

const countryFlags = (countryCode) =>
  Array.from(countryCode, (letter) =>
    String.fromCodePoint((letter.codePointAt() % 32) + 0x1f1e5)
  ).join("");

//console.log(countryFlags("MA")) =>  🇲🇦
//console.log(countryFlags("US")) =>  🇺🇸
//console.log(countryFlags("GB")) =>  🇬🇧
