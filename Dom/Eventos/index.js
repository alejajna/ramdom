const btnOk= document.querySelector('#btnOK');

btnOk.addEventListener('click',()=> {
    alert('Has dado click al boton');
});

const btnCancel= document.querySelector('#btnCancel');
btnCancel.addEventListener('click', showmessage);

function showmessage(){
    if(btnCancel.classList.contains('boton')){
        btnCancel.textContent = "terminado";
        btnCancel.style.backgroundColor ="red";
        this.style.color= 'white';
        btnCancel.classList.remove('boton');

    }else{
        btnCancel.textContent = "aprobado";
        btnCancel.classList.add('boton');
    };
 };

// // /* evento DOcontentLoaderd */

console.log(1);
document.addEventListener('DOMContentLoaded', ()=> {
    console.log(7);
});
console.log(10);





