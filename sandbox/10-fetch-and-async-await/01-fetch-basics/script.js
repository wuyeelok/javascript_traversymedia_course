console.log("Fetch basic");

fetch("../../../movies.json")
  .then((res) => {
    console.log(res);
    const myData = res.json();
    console.log(myData);
    return myData;
  })
  .then((data) => console.log("Movies:", data))
  .catch((error) => console.error("NOOOOOOOO", error));
