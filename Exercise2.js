// Exercise 2:

// Imagine you have a set of data in JSON, describing official languages spoken by countries,
// as such:
// [
// {
// country:"US",
// languages: ["en"]
// },
// {
// country:"BE",
// languages: ["nl","fr","de"]
// },
// {
// country:"NL",
// languages: ["nl"]
// },
// {
// country:"DE",
// languages: ["de"]
// },
// {
// country:"ES",
// languages: ["es"]
// }
// ]

// Write a function in javascript that:
// - returns the number of countries in the world
// - finds the country with the most official languages, where they officially speak German (de).
// - that counts all the official languages spoken in the listed countries.
// - to find the country with the highest number of official languages.
// - to find the most common official language(s), of all countries.

const countries = [
  {
    country: "US",
    languages: ["en"],
  },
  {
    country: "BE",
    languages: ["nl", "fr", "de"],
  },
  {
    country: "NL",
    languages: ["nl"],
  },
  {
    country: "DE",
    languages: ["de"],
  },
  {
    country: "ES",
    languages: ["es"],
  },
];

// - returns the number of countries in the world
const numOfContries = () => {
  return countries.length;
};

// - finds the country with the most official languages, where they officially speak German (de).
const countryWithMostOfficialLanguagesWithGerman = () => {
  let result = {
    country: undefined,
    languages: [],
  };
  countries.forEach((country) => {
    if (
      country.languages.includes("de") &&
      result.languages.length < country.languages.length
    ) {
      result = country;
    }
  });
  return result.country;
};

// - that counts all the official languages spoken in the listed countries.
const officialLanguagesCountForCountries = () => {
  const languages = [];
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (languages.indexOf(language) === -1) {
        languages.push(language);
      }
    });
  });
  return languages.length;
};

// - to find the country with the highest number of official languages.
const countryWithMostOfficialLanguages = () => {
  let result = {
    country: undefined,
    languages: [],
  };
  countries.forEach((country) => {
    if (result.languages.length < country.languages.length) {
      result = country;
    }
  });
  return result.country;
};

// - to find the most common official language(s), of all countries.
const mostCommonOfficialLanguages = () => {
  const languages = {};
  countries.forEach((country) => {
    country.languages.forEach((language) => {
      if (language in languages) {
        languages[language]++;
      } else {
        languages[language] = 1;
      }
    });
  });
  const max = Math.max.apply(Math, Object.values(languages));
  const commonLanguages = [];
  for (key in languages) {
    if (languages[key] === max) {
      commonLanguages.push(key);
    }
  }
  return commonLanguages;
};

console.log("Number of countries =", numOfContries());
console.log(
  "Country with the most official languages, where they officially speak German (de) =",
  countryWithMostOfficialLanguagesWithGerman()
);
console.log(
  "Counts of all the official languages spoken in the listed countries =",
  officialLanguagesCountForCountries()
);
console.log(
  "Country with the highest number of official languages =",
  countryWithMostOfficialLanguages()
);
console.log(
  "most common official language(s) =",
  mostCommonOfficialLanguages()
);
