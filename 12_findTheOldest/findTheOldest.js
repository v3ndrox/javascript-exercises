const findTheOldest = function (arr) {
  let age = 0;
  let oldest = "";
  let alive = 0;
  for (person of arr) {
    if (person.yearOfDeath === undefined) {
      console.log("pass");
      age = new Date().getFullYear() - person.yearOfBirth;
      oldest = person.name;
      alive++;
      continue;
    }
    if (person.yearOfDeath - person.yearOfBirth > age) {
      oldest = person.name;
      age = person.yearOfDeath - person.yearOfBirth;
      console.log(oldest);
      console.log(age);
    }
  }
  if (alive > 0) return oldest;
  else return "No one's alive";
};

// Do not edit below this line
module.exports = findTheOldest;
