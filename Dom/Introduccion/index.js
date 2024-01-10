/* 1 DOCUMENT OBJET MODEL - DOM */
/* ------------------------------------------------------------------------ */
console.log("hello");
const body= Document.body;
console.log(body);

const head= document.head;
console.log(head)

const domain= document.domain;
console.log(domain);

const uri= document.baseURI;
console.log(uri);

const formulario= document.forms;
console.log(formulario);

const enlaces= document.links;
console.log(enlaces);

const enlaceCustomer = document.links[2];
console.log(enlaceCustomer);

/* 1.1 seleccionar elementos por su clase - getElementsByClassName*/
const bgNav = document.getElementsByClassName("bg-nav");
console.log(bgNav);

const navPrincipal = document.getElementsByClassName("navegacion principal contenedor");
console.log(navPrincipal);

const serviciosDetalle= document.getElementsByClassName("servicios-detalle")
console.log(serviciosDetalle);

/* 1.2 seleccionar elementos por su id - getElementById */
const joseId= document.getElementById("jose")
console.log(joseId)

/* 1.2.1 seleccionar elementos por nombre etiqueta html - getElementsByTagName */
    /* const tituloH1= document.getElementsByTagNameNS('h1')
    console.log(tituloH1) */

/* 1.3 Seleccionar elementos con querySelector -
Solo el primero - clases, id, tag*/
const servicios = document.querySelector('.servicios');
console.log(servicios);

/* class */
const heroCont= document.querySelector('.hero-contenido');
console.log(heroCont);

/* id */
const joseid= document.querySelector('#jose');
console.log(joseid);

/* tag */
const footer= document.querySelector('footer');
console.log(footer);

/* 1.4 Seleccionar todos los elementos con querySelectorAll -
todos - clases,id,tag*/
const servicioDetall= document.querySelectorAll('.servicios-detalle');
console.log(servicioDetall);

const mobilApp= document.querySelector('.servicios-detalle'[1]);
console.log(mobilApp);

/* 1.5 Seleccionar y modificar el texto - textContent */
//.innerHTML;
//.innerText;

const subtitulo= document.querySelector('.headerito h1');
subtitulo.textContent =  "Daniela Rojas T"

subtitulo.innerHTML= `
<h2>servicios  blockchain</h2>
<p>cadena de bloques y bitcoin</p>
`;
/* 1.6 Seleccionar y modificar imagenes imagen.src*/
    const imagenPrograming = document.querySelector('img');
    imagenPrograming.src= "programming.jpg"

/* 1.7 Traversing de Padre a Hijo - children[] recorre hacia el hijo*/
    const menu= document.querySelector(".contenedor");
    menu.children[2].textContent= "nuevo"

    const menu2= document.querySelector(".bg-nav")
    menu2.children[0].children[3].textContent = "hola"

/* 1.8 Traversing de Hijo a Padre - parentElement - recorre
hacia el padre*/

    const main= document.querySelector('img');
    console.log(main.parentElement.parentElement.parentElement);

    const tituModif = main.parentElement.parentElement.parentElement.children[0].textContent= "Products"

/* 1.9 Traversing - hermanos nextElementSibling previousElementSibling*/
    
    const us= document.querySelector('.contenedor');
    us.children[1].nextElementSibling.textContent= 'Despues'
    us.children[1].previousElementSibling.textContent='Anterior'

/* 1.10. traversing primero - ultimo firstElementChild lastElementChild */
    menu.firstElementChild.textContent="Primero"
    menu.lastElementChild.textContent= "Ultimo"

/* 1.11 eliminar elementos del dom - desde si mismo - remove()*/
    //menu.firstElementChild.remove();

/* 1.12 eliminar elementos del dom - desde referencia del padre */
    //menu.removeChild(menu.lastElementChild);

/* 2 Generar html con javascript DOM Scripting*/
/* 2.1 crear elemento html createElement('elemento')*/
    const opcionPrivada= document.createElement('a');
    
/* 2.2 añadir texto al elemento  - textContent*/
    opcionPrivada.textContent = "Info Privada";

/* 2.3 añadir atributo href al elemento */
    opcionPrivada.href="https://www.google.com";

/* 2.4 añadir target al elemento */
    opcionPrivada.target = "_blank";

/* 2.5 seleccionar el padre (ej. la navegacion) */
    const navMain= document.querySelector('nav');

/* 2.6 añadir elemento al final  - appendChild()*/
    navMain.appendChild(opcionPrivada);

/* 2.7 añadir elemento en cualquier lugar  -
insertBefore(elemento,nodo de referencia)*/

//EJERCICIO
// Crear dos servicios mas

const newService= document.createElement('h3');
newService.textContent= "Metaverso";
const newimage= document.createElement('img');
newimage.src= "programming.jpg";
newimage.style.width = "200px";
const newParagraph = document.createElement('p');
newParagraph.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit"

const newSection = document.createElement('section');
newSection.classList.add("servicios-detalle");

newSection.appendChild(newService);
newSection.appendChild(newimage);
newSection.appendChild(newParagraph);

const services= document.querySelector('.servicios');
services.appendChild(newSection);
//..........

const newService1= document.createElement('h3');
newService1.textContent= "blog";

const newimage1 = document.createElement('img');
newimage1.src= "programming.jpg"
newimage1.style.width= "200px";

const newParagraph1 = document.createElement('p');
newParagraph1.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit"

const newSection1= document.createElement('section1');
newSection1.classList.add("servicios-detalle")

newSection1.appendChild(newService1);
newSection1.appendChild(newimage1);
newSection1.appendChild(newParagraph1);

services.appendChild(newSection1);

//..........

const newservice2 = document.createElement('h3');
newservice2.textContent= "IA"

const newimage2 = document.createElement('img');
newimage2.src= "programming.jpg"
newimage2.style.width= "200px"

const newParagraph2 = document.createElement('p'); 
newParagraph2.textContent= "Lorem ipsum dolor sit amet consectetur adipisicing elit";

const newSection2 = document.createElement('section');
newSection2.classList.add("servicios-detalle");

newSection2.appendChild(newservice2);
newSection2.appendChild(newimage2);
newSection2.appendChild(newParagraph2);

services.appendChild(newSection2);
