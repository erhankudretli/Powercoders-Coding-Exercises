const daysOftheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// // with map & IF Statement

// daysOftheWeek.forEach((day, index) => {
//   if (day === "Monday") {
//     daysOftheWeek[index] = "Lundi";
//   } else if (day === "Tuesday") {
//     daysOftheWeek[index] = "MardiEr";
//   } else if (day === "Wednesday") {
//     daysOftheWeek[index] = "Mercredi";
//   } else if (day === "Thursday") {
//     daysOftheWeek[index] = "Jeudi";
//   } else if (day === "Friday") {
//     daysOftheWeek[index] = "Vendredi";
//   } else if (day === "Saturday") {
//     daysOftheWeek[index] = "Samedi";
//   } else if (day === "Sunday") {
//     daysOftheWeek[index] = "Dimanche";
//   }
// });

// console.log(daysOftheWeek);

// with for & Switch
let daysOftheWeekGerman = [];
for (let index = 0; index < daysOftheWeek.length; index++) {
  let day = daysOftheWeek[index];
  switch (day) {
    case day === "Monday":
      daysOftheWeekGerman[index] = "Montag";
      break;
    case day === "Tuesday":
      daysOftheWeekGerman[index] = "Dienstag";
      break;

    case day === "Wednesday":
      daysOftheWeekGerman[index] = "Mittwoch";
      break;

    case day === "Thursday":
      daysOftheWeekGerman[index] = "Donnerstag";
      break;

    case day === "Friday":
      daysOftheWeekGerman[index] = "Freitag";
      break;

    case day === "Saturday":
      daysOftheWeekGerman[index] = "Samstag";
      break;

    case day === "Sunday":
      daysOftheWeekGerman[index] = "Sonntag";
      break;
  }
}
console.log(daysOftheWeekGerman);
