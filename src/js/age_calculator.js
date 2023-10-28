
const fieldDate = document.querySelector("#birthdate");
const previewAge = document.querySelector("#preview-age");

fieldDate.addEventListener('input', function() {
    const inputDate = new Date(fieldDate.value); 
    var ageDifMs = Date.now() - inputDate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (!isNaN(age) || age <= 0) {

        if ([2, 3, 4].includes(age % 10)) {
            previewAge.textContent = age + " года";

        } else if ([0, 5, 6, 7, 8, 9].includes(age % 10)) {
            previewAge.textContent = age + " лет";

        } else {
            previewAge.textContent = age + " год";

        }
    } else {
        previewAge.textContent = "Неверно введен возраст";
    }
});

