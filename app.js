const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  const submenu = item.querySelector('.submenu');

  item.addEventListener('mouseenter', () => {
    submenu.classList.add('show');
  });

  item.addEventListener('mouseleave', () => {
    submenu.classList.remove('show');
  });
});
function abrirModal() {
  document.getElementById('miModal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('miModal').style.display = 'none';
}
