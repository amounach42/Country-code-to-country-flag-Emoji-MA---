# Country Flags Converter

This is a simple JavaScript function that converts a country code string to flag emojis. It takes a two-letter country code as input and generates a string of flag emojis corresponding to the provided country code.

## Usage

To use the `countryFlags` function, follow these steps:

1.  Include the `countryFlags` function in your JavaScript project.

2.  Call the function with a two-letter country code as an argument:

    ```javascript
    const countryCode = "US";
    const flags = countryFlags(countryCode);
    console.log(flags); // Output: 🇺🇸
    ```

    Examples
    Here are some examples of converting country codes to flag emojis:

         const flags = countryFlags("MA");
         console.log(flags1); // Output: 🇲🇦

         const flags1 = countryFlags("US");
         console.log(flags1); // Output: 🇺🇸

         const flags2 = countryFlags("GB");
         console.log(flags2); // Output: 🇬🇧

         const flags3 = countryFlags("FR");
         console.log(flags3); // Output: 🇫🇷
