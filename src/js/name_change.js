const fieldName = document.querySelector('#name');
const previewName = document.querySelector('#preview-name');

fieldName.addEventListener('input', function() {
    previewName.textContent = fieldName.value;
});