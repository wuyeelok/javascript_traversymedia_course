console.log("Handle error in async await");

/* const getMyUsers = async () => {
  try {
    // const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const resp = await fetch(
      "https://run.mocky.io/v3/4b451c6b-f966-40d9-9482-8e97c8222ba9"
    );

    if (!resp.ok) {
      throw new Error("Request Failed!!!!");
    }

    const data = await resp.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getMyUsers();
 */

const getMyData = async () => {
  // const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const resp = await fetch(
    "https://run.mocky.io/v3/4b451c6b-f966-40d9-9482-8e97c8222ba9"
  );

  if (!resp.ok) {
    throw new Error("Request Failed!!!!");
  }

  const data = await resp.json();

  console.log(data);
};

getMyData().catch((err) => console.log(err));
