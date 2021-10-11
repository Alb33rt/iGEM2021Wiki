 const menuToggle = document.querySelector('.toggle');
      const mainpage = document.querySelector('.mainpage');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mainpage.classList.toggle('active');
      })