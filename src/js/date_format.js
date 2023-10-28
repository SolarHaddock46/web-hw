const dateInput = document.querySelector("#birthdate");

dateInput.addEventListener("input", function() {
  const inputValue = this.value;

  const numericValue = inputValue.replace(/[^\d/]/g, "");

  if (numericValue.length === 2 || numericValue.length === 5) {
    this.value = numericValue + "/";
  }
  
  if (numericValue.length > 10) {
    this.value = numericValue.slice(0, 10);
  }
});
