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

    return myData;
  })
  .then((data) => {
    console.log("Movies:", data);

    return fetch("../../../test.txt");
  })
  .then((res) => {
    console.log(res);
    const contentType = res.headers.get("content-type");
    console.log(contentType);
    if (!contentType || !contentType.includes("text/plain")) {
      throw new TypeError("Oops, we haven't got text!");
    }
    const myData = res.text();

    return myData;
  })
  .then((data) => console.log("Text file test:", data))
  .catch((error) => console.error("NOOOOOOOO", error));

/* fetch("../../../test.txt")
  .then((res) => {
    console.log(res);
    const contentType = res.headers.get("content-type");
    console.log(contentType);
    if (!contentType || !contentType.includes("text/plain")) {
      throw new TypeError("Oops, we haven't got text!");
    }
    const myData = res.text();
    console.log(myData);
    return myData;
  })
  .then((data) => console.log("Text file test:", data))
  .catch((error) => console.error("NOOOOOOOO", error));
 */
