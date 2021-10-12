const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const mainpage = document.querySelector('.mainpage');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  mainpage.classList.toggle('active');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
