const fieldBio = document.querySelector('#field-bio');
const previewBio = document.querySelector('#preview-bio');

fieldBio.addEventListener('input', function() {
    previewBio.textContent = fieldBio.value;
});

