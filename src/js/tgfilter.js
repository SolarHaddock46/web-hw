const tgField = document.querySelector("#telegram");
tgField.addEventListener("input", function() {
    const tgInput = tgField.value;
    const filteredTg = tgInput.replace(/[^a-zA-Z0-9_@]/g, "");
    tgField.value = filteredTg;
});

