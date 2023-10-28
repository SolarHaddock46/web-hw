const form = document.querySelector('#gender-form');
const fieldGender = document.querySelector('#gender-field');

form.addEventListener('change', function () {
  const selectedOption = form.querySelector('input[name="option"]:checked');

  if (selectedOption.value == "male") {
    fieldGender.textContent = "Парень";
  } else if (selectedOption.value == "female") {
    fieldGender.textContent = "Девушка";
  }
});
