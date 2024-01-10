console.log(turistas)
// crear la funcion
function cardturistas(turistas){
    const conteTarjetas= document.querySelector('#tarjetas');
    turistas.forEach((turista)=> {
        const cardturistasHTML= document.createElement('p');

        cardturistasHTML.innerHTML= `
        <div class="card" style="width: 18rem;">
        <img src="${turista.foto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${turista.Nombre}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${turista.id}</li>
          <li class="list-group-item">Edad: ${turista.Edad}</li>
          <li class="list-group-item">Genero: ${turista.genero}</li>
          <li class="list-group-item">Procedencia: ${turista.procedencia}</li>
          <li class="list-group-item">Idioma: ${turista.idioma}</li>
          <li class="list-group-item">Telefono: ${turista.telefono}</li>
          <li class="list-group-item">Correo: ${turista.correo}</li>
          <li class="list-group-item">Categorias: ${turista.categoriasFav}</li>
        </ul>
      </div>`;

      conteTarjetas.appendChild(cardturistasHTML);
    });

};



// para llamar la funcion
document.addEventListener('DOMContentLoaded', () => {
    cardturistas(turistas);
})





/* document.addEventListener('DOMContentLoaded', ()=>{
    showCoders(coders);
});
 ; */