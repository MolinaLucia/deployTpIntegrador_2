function calcular(){
    
    var tipo= document.getElementById('inputState').value; //tipo es si es junior,estudiante o trainee - STRING
    var cant= parseInt(document.getElementById('inputCantidad').value); //cant es la cantidad de entradas en INTEGER
    var suma= 200 * cant;   //sumo el total de la venta

    switch(tipo){
        case 'Estudiante':     //si tipo = Estudiante a la suma le descuento el 80%..
            parseInt(document.getElementById('result').value=((suma)-(suma*0.8)));
            brake;
        case 'Trainee':
            parseInt(document.getElementById('result').value=((suma)-(suma*0.5)));
            brake;
        case 'Junior':
            parseInt(document.getElementById('result').value=((suma)-(suma*0.15)));
            brake;      

    }
}

function limpiarFormulario(){     //LIMPIA EL FORMULARIO
    document.getElementById('miForm').reset();
}