document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("heading");
  const hiButton = document.getElementById("hi-button");
  const resetButton = document.getElementById("reset-button");

  const sayHiToPerson = (person) => {
    heading.textContent = `Hello ${person}!`;
  };

  const resetHeading = () => {
    heading.textContent = "Hello World";
  };

  hiButton.addEventListener("click", () => {
    sayHiToPerson("UXF23");
  });

  resetButton.addEventListener("click", resetHeading);

  const delayedHello = () => {
    setTimeout(() => {
      heading.textContent = "Delayed Hello!";
    }, 2000);
  };

  delayedHello();
});
