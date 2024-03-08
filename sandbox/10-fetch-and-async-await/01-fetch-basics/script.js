console.log("Fetch basic");

fetch("../../../movies.json")
  .then((res) => {
    console.log(res);
    const contentType = res.headers.get("content-type");
    console.log(contentType);
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    const myData = res.json();
    console.log(myData);
    return myData;
  })
  .then((data) => console.log("Movies:", data))
  .catch((error) => console.error("NOOOOOOOO", error));
