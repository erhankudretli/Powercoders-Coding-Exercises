const daysOftheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// with map & IF Statement
// const daysOftheWeekFrnch = daysOftheWeek.map((day, index) => {
//   if (day === "Monday") {
//     return "Lundi";
//   }
//   if (day === "Tuesday") {
//     return "Mardi";
//   }
//   if (day === "Wednesday") {
//     return "Mercredi";
//   }
//   if (day === "Thursday") {
//     return "Jeudi";
//   }
//   if (day === "Friday") {
//     return "Vendredi";
//   }
//   if (day === "Saturday") {
//     return "Samedi";
//   }
//   if (day === "Sunday") {
//     return "";
//   }
// });

// console.log(daysOftheWeekFrnch);

// with for & Switch
let daysOftheWeekGerman = [];
for (let index = 0; index < daysOftheWeek.length; index++) {
  let day = daysOftheWeek[index];
  switch (day) {
    case "Monday":
      daysOftheWeekGerman.push("Montag");
      break;
    case "Monday":
      daysOftheWeekGerman.push("Montag");
      break;
    case "Monday":
      daysOftheWeekGerman.push("Montag");
      break;
    case "Monday":
      daysOftheWeekGerman.push("Montag");
      break;
  }
}
console.log(daysOftheWeekGerman);
