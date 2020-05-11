export default document.body.onload = function Hello() {
  setTimeout(() => {
    const preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('closePreloader')) {
      preloader.classList.add('closePreloader');
      document.body.style.visibility = 'visible';
    }
  }, 2000);
};
