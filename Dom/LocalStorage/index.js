/* 1. Registrar valores en el localStorage  - setItem('key', 'value')*/

localStorage.setItem('center','riwi');

/* 2. guardar un objeto en local Storage */
    const coder= {
        nombre: "nicol",
        celular: 3204608777
    }
    /* 2.1 Convertir objeto a string (JSON.Stringify) */

    const coderString= JSON.stringify(coder);
    console.log(coderString);

    /* 2.2. Guardar string con forma de objeto en LocalStorage */
    localStorage.setItem('coder', coderString);

/* 3. Guardar un array en local Storage */
    const coderArray=["daniela", "julian", "miguel"];

    /* 3.1 convertir el array en string */
    const coderArrayString= JSON.stringify(coderArray);
    console.log(typeof coderArrayString)

    /* 3.2  Guardar eñ string en el local storage*/
    localStorage.setItem('coderArray', coderArrayString);

/* 4. OBTENER ELEENTOS DESDE EL LOCALSTORAGE - getItem()*/
   
    /* 4.1 obtener dato plano */
    const center= localStorage.getItem('center')
    console.log(center);
    
    /* 4.2 obtener un string en forma de objeto desde local storage */
    const coderObject= JSON.parse(localStorage.getItem('coder'))
    console.log(coderObject);

    /* 4.3 Obtener un string en forma de array desde local storage */
    const coderArr= JSON.parse(localStorage.getItem('coderArray'));
    console.log(coderArr);

/* 5.  CRUD
    (C)- Create - setItem(),
    (R)- Read - getItem(),
    (U)- UpDate -  
    (D)- Delete - removeItem(),
*/

/* 6. Eliminar elementos desde el localStorage */
    localStorage.removeItem('center');

/* 7. Actualizar desde local storage */

    /* 7.1  cogiendo el string que tenia arriba y convertirlo en array de nuevo (ya lo hice en el punto 4.3)*/

    coderArr.push("verment");
    const coderArrayStg= JSON.stringify(coderArr);
    localStorage.setItem('coders', coderArrayStg);

    console.log(coderArr);
    console.log(typeof coderArrayStg)
    console.log(coderArrayStg );
