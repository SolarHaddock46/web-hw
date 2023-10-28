const field_name = document.querySelector("#name");
field_name.addEventListener("input", function() {
    const nameInput = field_name.value;
    const filteredName = nameInput.replace(/[^а-яА-Яa-zA-Z\s]/g, "");
    field_name.value = filteredName;
});