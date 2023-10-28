const phoneNumberInput = document.querySelector("#phone-field");

phoneNumberInput.addEventListener("input", function() {
    const inputValue = this.value;
    const numericValue = inputValue.replace(/[^0-9\s+\-()]/g, "");
    if (numericValue.length === 7) {
        this.value = `${numericValue}) `;
    }
    if (numericValue.length === 12 || numericValue.length === 15) {
    this.value = `${numericValue}-`;
    }

    if (numericValue.length > 18) {
    this.value = numericValue.slice(0, 18);
    }
});
