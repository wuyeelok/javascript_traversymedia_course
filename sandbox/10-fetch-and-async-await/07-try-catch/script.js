console.log("Try catch");

try {
  console.log(abc);
} catch (error) {
  console.log(`Error: ${error}`);
}

function trible(num) {
  if (isNaN(num)) {
    throw new Error(`${num} is not a number`);
  }

  return num * 3;
}

try {
  const y = trible("ssdf");
  console.log(y);
} catch (err) {
  console.log(err);
}
