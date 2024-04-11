// Example of how to handle errors

// Simulates fetching data from an API
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate an error (change to false to test success scenario)
    const isError = true;

    setTimeout(() => {
      if (isError) {
        reject(new Error("Failed to fetch data from the API"));
      } else {
        resolve("Data from the API");
      }
    }, 1000);
  });
};

// Handles fetching data and gracefully handles errors
const fetchDataWithGracefulErrorHandling = async () => {
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
    // Perform additional error handling or fallback actions here
  }
};

// Call the function with graceful error handling
fetchDataWithGracefulErrorHandling();
