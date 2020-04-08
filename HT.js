let edad=15;
let peso=63;


let saludo= "Hola Mundo!";
console.log(saludo);


let numeroA=30;
let numeroB=45;
let numeroAUXILIAR=numeroA;
numeroA=numeroB;
numeroB=numeroAUXILIAR;
console.log(numeroA);
console.log(numeroB);





let BocaCampeon=true;
console.log(BocaCampeon);


function boke(){
    return "PROGRAMACION";
}
let bb= boke()
console.log(bb)

let name= "Mateo";
function hola(name){
    return "Bienvenido: " + name;
}
console.log(hola(name))


let gente= ["mateo","luis","pedro"];
console.log(gente[1]);
gente[1]="Luis Miguel";
console.log(gente[1]+" "+gente[0]);
gente[10]="PEPE";
console.log(gente);


let hombre={
    nombre:"Juan",
    DNI:43442345,
    sangre:"A+",
    edad:19,
    saludar: function(){
        return "EEYY COMO ANDANN??";
    }
}
console.log(hombre);
console.log(hombre.DNI);
console.log(hombre.saludar());