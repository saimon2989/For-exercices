
// variables

let inputOne = document.getElementById('inputOne').value;
let inputTwo = document.getElementById('inputTwo').value;
let inputThree = document.getElementById('inputThree').value;
let inputFour = document.getElementById('inputFour').value;
let inputFive = document.getElementById('inputFive').value;
let inputSix = document.getElementById('inputSix').value;


let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');

let platillos = document.getElementsByClassName('platillos');


// Events

btnOne.addEventListener('click', getForOne);
btnTwo.addEventListener('click', getForTwo);
btnThree.addEventListener('click', arrayImpares);
btnFour.addEventListener('click', arrayPares);


// For function 1

function getForOne(){
    let arrayPlatillos = [];
    for (i = 0; i < platillos.length; i++) {
        arrayPlatillos[i] = platillos[i].value;
        // console.log(platillos[i].value);
        console.log(arrayPlatillos[i]);
    }
    
}


// For function 2

function getForTwo(){
    let arrayPlatillos = [];
    for (i = 3; i < 5; i++) {
        if(arrayPlatillos[i] = platillos[i].value){
            console.log(platillos[i].value);
        }
    }
        
}

// For function 3 

function arrayImpares (){
    let arrayPlatillos = [0,1,2,3,4,5,6];
    let impares = [];
    for(i = 0 ; i < arrayPlatillos.length; i++){
        if(i % 2){
        impares.push(arrayPlatillos[i]);
        }
    }
    console.log('Los numeros impares son ' + impares);
}

function arrayPares (){
    let arrayPlatillos = [0,1,2,3,4,5,6];
    let pares = [];
    for(i = 0; i < arrayPlatillos.length; i++){
        if(i % 2){

        }else{
            pares.push(arrayPlatillos[i]);
        }
    }
    console.log('Los numeros pares son ' + pares);
}

// Exercice 2

let enteros = [1, 5, 10, 12, 12, 13, 22, 25, 30, 32];

let btnProm = document.getElementById('btnPromedio');

// Events

btnProm.addEventListener('click', promedio);


// Functions

function promedio (){
    let sumaEnteros = enteros;
    let total = sumaEnteros.reduce((a,b) => a + b, 0);
    let promedio = total / enteros.length;
    console.log('El promedio del arreglo enteros es de ' + promedio);
}


// Exercice 3

let number = document.getElementById('inputNumber');
let btnTable = document.getElementById('btnTabla');

// Events

btnTable.addEventListener('click', getTable);

// Functions

function getTable(){
    for(i=0; i < 11 ; i ++ ){
        let table = number.value * i;
        console.log(number.value + ' x ' + i + ' = ' + table);
    }
}


// Exercice 4

let empleados = [   {nombre: 'Pepito Perez', Sueldo: 20000},
                    {nombre: 'Mari Carmen', Sueldo: 14000}, 
                    {nombre: 'Lady Dee', Sueldo: 17000},
                    {nombre: 'John Doe', Sueldo: 12000},
                    {nombre: 'Kerry Katul', Sueldo: 21000},
                    {nombre: 'Armando Casas', Sueldo: 18000},
                    {nombre: 'Ana Cabrera', Sueldo: 24000},
                    {nombre: 'Gustavo Racho', Sueldo: 50000},                                         
                ]

let btnBestEmp = document.getElementById('btnEmpleado');

// Eventos

btnBestEmp.addEventListener('click', getBestEmp);

// Functions 

function getBestEmp(){
    console.log(empleados[7]);
}