/* // Success
fetch('http://httpstat.us/200')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  });

// The issue here is that the 'success' shows and the .catch() does NOT run for an error status like 404 or 500
fetch('http://httpstat.us/404')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

// Catch ONLY runs on a network error
fetch('http://hello123.net')
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

// Test with response.ok
fetch('http://httpstat.us/404')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });

// Check for specific code
fetch('http://httpstat.us/200')
  .then((response) => {
    if (response.status === 404) {
      throw new Error('Not Found');
    } else if (response.status === 500) {
      throw new Error('Server Error');
    } else if (response.status !== 200) {
      throw new Error('Request Failed');
    }
    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch((error) => {
    console.log(error);
  });
 */

// 200
/* fetch("https://run.mocky.io/v3/cce9e461-be94-4567-a18e-dbe0b83f60dd")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error)); */

// 404
/* fetch("https://run.mocky.io/v3/4b451c6b-f966-40d9-9482-8e97c8222ba9")
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    console.log(response.statusText);

    if (!response.ok) {
      throw new Error("Request Failed 404");
    }
  })
  .then((response) => {
    console.log("success");
  })
  .catch((error) => console.log(error)); */

// 500
fetch("https://run.mocky.io/v3/806ac066-b9c6-4cdf-b96c-6dee89f7fc4c")
  .then((response) => {
    /*  console.log(response.status);
    console.log(response.ok);
    console.log(response.statusText); */

    if (response.status === 404) {
      throw new Error("Page Not Found 404");
    } else if (response.status === 500) {
      throw new Error("Server Error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
  })
  .then((response) => {
    console.log("success");
  })
  .catch((error) => console.log(error));
