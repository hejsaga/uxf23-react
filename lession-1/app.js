// Select elements from the DOM
const heading = document.querySelector("h2"); // Selects the first <h2> element
const footer = document.querySelector(".footer"); // Selects an element with class "footer"
const allParagraphs = document.querySelectorAll("p"); // Selects all <p> elements

// Function to update heading text content
function updateHeading() {
  heading.textContent = "I'm a more useful heading now!";
}

// Function to update footer inner HTML
function updateFooter() {
  footer.innerHTML =
    "<p>&copy; 2024 The Useless Corporation. All rights reversed.</p>";
}

// Event listeners for additional functionality
heading.addEventListener("click", updateHeading); // Event listener for heading click
footer.addEventListener("mouseover", updateFooter); // Event listener for footer mouseover

// Dynamic creation of DOM elements
const newParagraph = document.createElement("p"); // Create a new <p> element
newParagraph.textContent = "I'm a newly created paragraph!"; // Set text content

const mainSection = document.querySelector("main"); // Select the <main> element
mainSection.appendChild(newParagraph); // Append the new paragraph to the main section

const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("countDisplay");
let count = 0;

// Function for increasing the count
function increaseCount() {
  count++;
  countDisplay.textContent = count;
}

// Function for decreasing the count
function decreaseCount() {
  count--;
  countDisplay.textContent = count;
}

// Event listeners for the count button
const increaseButton = document.createElement("button");
increaseButton.textContent = "Increase Count";
increaseButton.addEventListener("click", increaseCount);
mainSection.appendChild(increaseButton);

const decreaseButton = document.createElement("button");
decreaseButton.textContent = "Decrease Count";
decreaseButton.addEventListener("click", decreaseCount);
mainSection.appendChild(decreaseButton);
