const toggleArea = document.getElementById('toggleArea');
const formSections = document.querySelectorAll('.form-section');

toggleArea.addEventListener('change', () => {
  if (toggleArea.checked) {
    document.getElementById('suporte').classList.add('show');
    document.getElementById('outra').classList.remove('show');
  } else {
    document.getElementById('suporte').classList.remove('show');
    document.getElementById('outra').classList.add('show');
  }
});