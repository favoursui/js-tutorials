
const input = document.getElementById('myInput');
const preview = document.getElementById('preview');
const bold = document.getElementById('bold');

input.addEventListener('input', () => {
preview.textContent = input.value;
bold.textContent = input.value;
});
  