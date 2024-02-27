//  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
const x = 100;
const y = 50;
var z = 400;
const me = {
  name: "Kenneth",
};
var me2 = {
  name: "ZZZWER",
};

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2);
