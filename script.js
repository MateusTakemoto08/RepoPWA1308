document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const drawerMenu = document.getElementById('drawer-menu');

  menuToggle.addEventListener('click', () => {
    drawerMenu.classList.toggle('open');
  });

  // Fecha menu ao clicar fora
  document.body.addEventListener('click', (e) => {
    if (!drawerMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      drawerMenu.classList.remove('open');
    }
  });

  // Fecha menu ao clicar em um link
  const links = drawerMenu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      drawerMenu.classList.remove('open');
    });
  });
});
