function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          // resolve(JSON.parse(this.responseText));
          let myData;
          try {
            myData = JSON.parse(this.responseText);
            resolve(myData);
          } catch (e) {
            reject("Something went wrong with the JSON");
          }
        } else {
          reject("Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}
