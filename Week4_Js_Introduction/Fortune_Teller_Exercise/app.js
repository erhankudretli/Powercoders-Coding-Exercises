let number_of_child = Math.floor(Math.random() * 6);
let partner_names = [
  "Bellamy",
  "Charlie",
  "Dakota",
  "Denver",
  "Emerson",
  "Finley",
];
let locations = ["Germany ", "China ", "Turkey ", "Spain ", "USA "];
let job_titles = ["doctor ", "engineer ", "soldier ", "nurse ", "salesman "];

console.log(
  "You will be in " +
    locations[Math.floor(Math.random() * locations.length)] +
    " and married to " +
    partner_names[Math.floor(Math.random() * partner_names.length)] +
    " with  " +
    number_of_child +
    "children"
);
