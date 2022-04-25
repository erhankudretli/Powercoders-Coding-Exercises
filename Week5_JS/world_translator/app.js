/**
 * Write a function named helloWorld that:
Takes 1 argument, a language code (e.g. "es", "de", "en")
Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works
 * 
 */

// let userPreferance = prompt(
//   "use those expression to select language fr, de, tr"
// );

const helloWorld = (pLang) => {
  switch (pLang) {
    case "fr":
      return "Bonjour le Monde";

    case "de":
      return "Hallo Welt";

    case "tr":
      return "Merhaba Dünya";

    default:
      return "Hello World";
    // code block
  }
};

let messagefr = helloWorld("fr"); // Bonjour le Monde
let messagede = helloWorld("de"); // Hallo Welt
let messagetr = helloWorld("tr"); // Merhaba Dunya
let message = helloWorld(); // Hello World
