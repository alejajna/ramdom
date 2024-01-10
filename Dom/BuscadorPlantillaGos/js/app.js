console.log(coders);

/* 6. Selecctores */

const nombreCoder = document.querySelector('#nombre');
const edad = document.querySelector('#edad');
const minPromedio= document.querySelector('#minimo');
const maxPromedio= document.querySelector('#maximo');
const clanRiwi= document.querySelector('#clanRiwi');
const nivelIngles= document.querySelector('#nivelIngles');
const especialidad = document.querySelector('#especialidad');
const expertoTecnologia= document.querySelector('#expertoTecnologia');



/* 1. Crear dinamicamente valores de los nombre de coders como options del select */

coders.forEach((coder)=>{
    const opcion= document.createElement('option')
    opcion.value= coder.nombre;
    opcion.textContent= coder.nombre;

    document.querySelector('#nombre').appendChild(opcion);

});


const max= 45;
const min= 15;

for(let i= min; i<=max; i++){
    const option= document.createElement('option');
    option.value= i;
    option.textContent= i;
    document.querySelector('#edad').appendChild(option);
};

/* 5. Declara objeto con los criterios para la busqueda */

const criteriosSelecionados= {
    nombre:"",
    edad:"",
    minPromedio:"",
    maxPromedio:"",
    clanRiwi:"",
    nivelIngles:"",
    especialidad:"",
    expertoTecnologia:"",
}

/* 7. Event listener para filtros */
nombreCoder.addEventListener('input', (e)=>{
    criteriosSelecionados.nombre= e.target.value;
    //8. Llamando funcion filter de alto nivel.
    filtrarCoder();
});
edad.addEventListener('input',(e)=>{
    criteriosSelecionados.edad=e.target.value;
    filtrarCoder();
});
minPromedio.addEventListener('input',(e)=>{
    criteriosSelecionados.minPromedio=e.target.value;
    filtrarCoder();
});
maxPromedio.addEventListener('input',(e)=>{
    criteriosSelecionados.maxPromedio=e.target.value;
    filtrarCoder();
});
clanRiwi.addEventListener('input',(e)=>{
    criteriosSelecionados.clanRiwi=e.target.value;
    filtrarCoder();
});
nivelIngles.addEventListener('input',(e)=>{
    criteriosSelecionados.nivelIngles=e.target.value;
    filtrarCoder();
});
especialidad.addEventListener('input',(e)=>{
    criteriosSelecionados.especialidad=e.target.value;
    filtrarCoder();
});
expertoTecnologia.addEventListener('input',(e)=>{
    criteriosSelecionados.expertoTecnologia=e.target.value;
    filtrarCoder();
});


// 3. Event Listeners

document.addEventListener('DOMContentLoaded', ()=>{
    console.log(criteriosSelecionados);
    showCoders(coders);
    selectCoder();
});

/* 4. Funtion para inyectar cards */

function showCoders(coders){
    const contenedorTarjetas= document.querySelector('#tarjetas');
    limpiar();
    coders.forEach((coder)=>{
        //destructurar
        const {imageUrl, nombre, detalle, promedio, especialidad, expertoTecnologia, id}= coder;

        const coderHtml= document.createElement('p');
        coderHtml.innerHTML= `  
        <div class="card" style="width: 18rem;">
            <img src="${imageUrl}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${detalle}.</p>
            </div>
            <ul class= "list-group list-group-flush">
            <a href="# " class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" img="${imageUrl}" pro="${promedio}" esp="${especialidad}" expTec="${expertoTecnologia}"> Details </a>
            <a href="# " class="btn btn-primary boton" id= "${id}"> Hire </a>
            </ul>
        </div>`;

      contenedorTarjetas.appendChild(coderHtml);
    })
} ;

/* 8.1 Declaraciuon de mi funcion filter de alto nivel */

function filtrarCoder(){
    const resultado=  coders
    .filter(filtrarNombreDuuude)
    .filter(filtrarEdad)
    .filter(filtrarPromedio)
    .filter(filtrarClanRiwi)
    .filter(filtrarNivelIngles)
    .filter(filtrarEspecialidad)
    .filter(filtrarExpertoTecnologia)
    .filter(filtrarBuscador)
    console.log(resultado);

    if(resultado.length){
        showCoders(resultado);
    }else{
        coincidencias()
    }
    
}

function coincidencias(){
    limpiar();
    const alerta= document.createElement("p");
    alerta.appendChild(document.createTextNode('El coder no existe'));
    document.querySelector('#tarjetas').appendChild(alerta);
}

/* 8.2 Declaracion de funcion hija argumento de la funcion filter de alto nivel */
function filtrarNombreDuuude(coder){
    if(criteriosSelecionados.nombre){
        return coder.nombre === criteriosSelecionados.nombre
    }else{
        return coder;
    };
};

function filtrarEdad(coder){
    if(criteriosSelecionados.edad){
        return coder.edad === parseInt(criteriosSelecionados.edad);
    }else{
        return coder;
    };
};

function filtrarPromedio(coder){
    if(criteriosSelecionados.minPromedio && criteriosSelecionados.maxPromedio){
        return(
            coder.promedio >= criteriosSelecionados.minPromedio &&
            coder.promedio <= criteriosSelecionados.maxPromedio
        )
    }else{
        return coder;
    };
};

function filtrarClanRiwi(coder){
    if(criteriosSelecionados.clanRiwi){
        return coder.clanRiwi === criteriosSelecionados.clanRiwi;
    }else{
        return coder;
    };
};
function filtrarNivelIngles(coder){
    if(criteriosSelecionados.nivelIngles){
        return coder.nivelIngles === criteriosSelecionados.nivelIngles;
    }else{
        return coder;
    }
};
function filtrarEspecialidad(coder){
    if (criteriosSelecionados.especialidad){
        return coder.especialidad === criteriosSelecionados.especialidad;
    }else{
        return coder;
    };
};
function filtrarExpertoTecnologia(coder){
    if(criteriosSelecionados.expertoTecnologia){
        return coder.expertoTecnologia=== criteriosSelecionados.expertoTecnologia;
    }else{
        return coder;
    };
};


/* Despues de filtrar eliminar trajetas no filtradas*/
function limpiar(){
    let z= document.querySelectorAll('p');
    for(let v= 0; v< z.length; v++){
        z[v].remove();
    }
}

/////// QUIZ 2

const buscadorCoder = document.querySelector('#buscar');

buscadorCoder.addEventListener('input', (evento)=>{
    criteriosSelecionados.nombre= evento.target.value;
    filtrarCoder();
});


function filtrarBuscador(coder){

    if(criteriosSelecionados.nombre){
        return coder.nombre === criteriosSelecionados.nombre;
    }else{
        return coder
    };
};

/*-------DETAILS-------*/

//Seleccinar el tbody de la tabla
const tbody = document.querySelector('tbody');
//Crear una nueva fila en la tabla
const rowModal= document.createElement('tr');

//Seleccionar la tarjeta dentro de la funcion
function selectCoder(){
    const coderDetails= document.querySelector('#tarjetas')
    coderDetails.addEventListener('click', showDetail)
};

function showDetail(e){
    const imagen= e.target.getAttribute('img')
    rowModal.innerHTML= `
    <td>
        <img src= "${imagen}" class="card-img-top">
    </td>

    `;
    tbody.appendChild(rowModal);
};

/*-------HIRE-------*/
let arrayCards= [];  /*Declaracion del array con cards de coder a ser contratados*/

//Selelctors
const cards= document.querySelector('#tarjetas');
const tBodie= document.querySelector('#tBodie');
const deleteListCards= document.querySelector('#deleteListCards');
const deleteAll= document.querySelector('.deleteAll');

/*event listeners */
cards.addEventListener('click', selectCards);
deleteListCards.addEventListener('click',deleteCard);
deleteAll.addEventListener('click', deleteTodo);


function selectCards(e){
    e.preventDefault();
    if(e.target.classList.contains('boton')){
        const electedCoder= e.target.parentElement.parentElement;
        console.log(electedCoder);
        detail(electedCoder);
    }
}

function detail(electedCoder){
    const coderDetail = {
        imagen: electedCoder.querySelector('img').src,
        nombre: electedCoder.querySelector('h5').textContent,
        detalle: electedCoder.querySelector('p').textContent,
        id: electedCoder.querySelector('.boton').getAttribute('id'),
    } 
    arrayCards = [...arrayCards, coderDetail];
    console.log(arrayCards);
    injectingCoderHtml();
};
function deleteCard(e){
    if(e.target.classList.contains('deleteCards')){
        const coderToDelete= e.target.getAttribute('id');
        arrayCards= arrayCards.filter((cd)=> cd.id !== coderToDelete);
        injectingCoderHtml();
    }
}

/*function deleteTodo(){
    
}*/

function injectingCoderHtml(){
    cleanHtml();
    arrayCards.forEach((card)=>{
        const{imagen, nombre, detalle, id}= card;
        const row= document.createElement('tr');
        row.innerHTML= `
            <td>
                <img src= "${imagen}" width="150px">
            </td>
            <td>
                <p>${nombre}</p>
            </td>
            <td>
                <p>${detalle}</p>
            </td>
            <td>
                <a href="#" class="deleteCards btn btn-danger" id="${id}"> x </a>
            </td>
        `;
        tBodie.appendChild(row);
    })
}

function cleanHtml(){
    tBodie.innerHTML= "";
}

