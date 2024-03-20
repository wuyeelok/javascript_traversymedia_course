const square = {
  name: "Square A",
  width: 20,
  height: 20,
  area: function () {
    return this.width * this.height;
  },
};

console.log(square.area());

const squareB = {
  name: "Square B",
  width: 10,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};
console.log(squareB.area());
