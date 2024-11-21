const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add('show');
  }, index * 300); // 300ms de retraso entre cada elemento
});