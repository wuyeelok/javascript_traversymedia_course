const d = new Date(2022, 1, 10, 11, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

const actualMonth = Intl.DateTimeFormat("default", { month: "long" }).format(d);
console.log(actualMonth);

// Immediate value evaluation
switch (month) {
  case 0:
    console.log("It is January");
    break;
  case 1:
    console.log("It is February");
    break;
  case 2:
    console.log("It is March");
    break;
  default:
    console.log("It is not Jan, Feb or March");
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
