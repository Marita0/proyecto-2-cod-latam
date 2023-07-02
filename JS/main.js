function cambiarImagen() {
   let imagen = document.getElementById('img1');
   if (imagen.src.match("img/foto-dibujo.png")) {
    imagen.src = "img/foto-perfil.png";
   } else {
    imagen.src = "img/foto-dibujo.png";
   }
}

const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(function(item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
});