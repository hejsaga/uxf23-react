const fetch = require("node-fetch");

// Asynchronous programming concepts

// 1. Callbacks
const fetchDataWithCallback = (callback) => {
  setTimeout(() => {
    const data = "The data from the callback";
    callback(data);
  }, 1000);
};

fetchDataWithCallback((data) => {
  console.log("Callback:", data);
});

// 2. Promises
/* const fetchDataWithPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data from the promise";
      resolve(data);
    }, 1000);
  });
};

fetchDataWithPromise()
  .then((data) => {
    console.log("Promise:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */

// 3. Async/Await
/* const fetchDataWithAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Data from async/await:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchDataWithAsyncAwait(); */

// 4. Fetching data from API
/* fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data from Fetch API:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */
