let searchIcon = document.getElementById('searchIcon').addEventListener('click', () => {
  let searchBar = document.getElementById('searchBar').classList.toggle('show-search');
});

let burgerBtn = document.getElementById('burgerBtn').addEventListener('click', () => {
  let sidebar = document.getElementById('sidebar').classList.toggle('show-sidebar');
  let search = document.getElementById('search').classList.toggle('show-sidebar');
  burgerBtn = document.getElementById('burgerBtn').classList.toggle('i-menu');
});

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.main', { delay: 500 });