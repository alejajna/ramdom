//Selectores

const canecaGris= document.querySelector('#aprovechables');
const canecaVerde= document.querySelector('#organicos');
const canecaNegra= document.querySelector('#no_aprovechables');


/* const canecas= document.querySelector('.bowl') */
const btnModal= document.querySelector('#btnOpenModal');
const btnAgregar= document.querySelector('#btnSubmit');
const ingresoCant= document.querySelector('#cantidad').value;
const ingresoCantidad= parseInt(ingresoCant);

//Evento para que aparezca el modal 
/* canecas.forEach(
canecas.addEventListener('click',(e)=>{
    document.querySelector('#btnOpenModal').click();
})
) */


canecaGris.addEventListener('click', (e)=>{
    btnAgregar.addEventListener('click', agregarGris);
});

canecaVerde.addEventListener('click', (e)=>{
    btnAgregar.addEventListener('click', agregarVerde);
});

canecaNegra.addEventListener('click', (e)=>{
    btnAgregar.addEventListener('click', agregarNegra);
});


//objetos para guardar contadores

const basuras= [
    
    piso3={
        aprobechables: 0,
        organicos: 0,
        noAprobechable: 0,
    },
    piso4={
        aprobechables: 0,
        organicos: 0,
        noAprobechable: 0,
    },
    piso5={
        aprobechables: 0,
        organicos: 0,
        noAprobechable: 0,
    },
];

const basurasString= JSON.stringify(basuras);
localStorage.setItem('basura', basurasString);

const filtroPiso= document.querySelector('#select_floor').value;


//funciones
function agregarGris() {
    console.log(ingresoCantidad);
    const callBasuras =  JSON.parse(localStorage.getItem('basura'));

    
    if(filtroPiso == "3"){
        callBasuras[0].aprobechables += ingresoCantidad;
    }else if(filtroPiso == "4"){
        callBasuras[1].aprobechables += ingresoCantidad;
    }else if(filtroPiso == "5"){
        callBasuras[2].aprobechables += ingresoCantidad;
    }

    console.log(callBasuras);
    actualizarStorage();
};

function agregarVerde() {
    
    const callBasuras = JSON.parse(localStorage.getItem('basura'));

    if(filtroPiso == "3"){
        console.log(ingresoCantidad);
        callBasuras[0].organicos+= ingresoCantidad;
    }else if(filtroPiso == "4"){
        callBasuras[1].organicos+= ingresoCantidad;
    }else if(filtroPiso == "5"){
        callBasuras[2].organicos  += ingresoCantidad;
    }

    console.log(callBasuras)
    actualizarStorage();
};

function agregarNegra() {
    console.log(ingresoCantidad);
    const callBasuras = JSON.parse(localStorage.getItem('basura'));

    if(filtroPiso == "3"){
        callBasuras[0].noAprobechable  += ingresoCantidad;
    }else if(filtroPiso == "4"){
        callBasuras[1].noAprobechable += ingresoCantidad;
    }else if(filtroPiso == "5"){
        callBasuras[2].noAprobechable  += ingresoCantidad;
    }

    console.log(callBasuras)
    actualizarStorage();
}


function actualizarStorage(callBasuras){
    const callBasurasString= JSON.stringify(callBasuras);
    localStorage.setItem('basura', callBasurasString);
};

