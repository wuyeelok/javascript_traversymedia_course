/* // Loop through objects
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// Loop through arrays
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
 */

const car = {
  horsepower: 400,
  brand: "Toyota",
  numberOfDoor: 4,
};

for (const prop in car) {
  console.log(prop, car[prop]);
}
