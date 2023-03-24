let salem = {
  firstName: "Salem",
  yearOfBirth: 1993,
  countryOfOrigin: "Sudan",
};

let ijeoma = {
  firstName: "Ijeoma",
  yearOfBirth: 2001,
  countryOfOrigin: "England",
};

// This function is provided. You should not modify it!
// It takes as input a person -> how it uses the fields
// in the person object will tell you what fields to put in the
// objects above
function logInformationAbout(person) {
  let age = 2023 - person.yearOfBirth;
  console.log(
    `${person.firstName} is from ${person.countryOfOrigin}`,
    `and will be ${age} years old in 2023`
  );
}

logInformationAbout(salem);
logInformationAbout(ijeoma);