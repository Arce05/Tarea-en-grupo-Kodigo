//Evento para capturar el scroll hasta el final de la pantalla
window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight) {
        for (let i = 0; i < 15; i++) {
            nuevaCard(i);
        }
    }
});
//Funcion para agregar imagenes cuando se hace scroll infinito
const nuevaCard = (i) =>{
    const cont = document.getElementById('wrapper-card');
    const nCard = document.createElement('div');
    nCard.classList.add('card');
    nCard.innerHTML = `
    <div>
        <button class="menu-superior">Guardar</button>
    </div>
    <img src="https://picsum.photos/500?random=${i} alt=" />
    <div class="lowermenu">
        <button><a href="">Link de descarga</a></button>
        <ion-icon name="download"></ion-icon>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>
    `;
    cont.appendChild(nCard);
}
