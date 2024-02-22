// Array challege 1
console.log("Array challege begins");

const originArr = [1, 2, 3, 4, 5];
console.log(`original array: ${originArr}`);

let challegeArr = [...originArr];
challegeArr.reverse();
challegeArr.push(0);
challegeArr.unshift(6);
console.log(`original array: ${originArr}, Challege array: ${challegeArr}`);

// Array challege 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let arr3 = [...arr1];
arr3.pop();
arr3 = arr3.concat(arr2);

console.log(`arr1: ${arr1}, arr2: ${arr2}, arr3: ${arr3}`);

const arr33 = arr1.slice(0, 4).concat(arr2);
console.log(`arr1: ${arr1}, arr2: ${arr2}, arr33: ${arr33}`);
