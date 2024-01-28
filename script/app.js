//Reto 01
//Ejercicio 01
//let entrada=[4,3,5,7]
//
//function retornarUltimoElemento(entrada){
//  let resultado= entrada[entrada.length-1];
//  return resultado;
//}
//
//console.log(retornarUltimoElemento(entrada));

// Ejercicio 02
//let arreglo=[2,7,5,11];
//let numero=4;
//
//function unirelementos(arreglo,numero){
//    let resultado=[...arreglo,numero];
//    return resultado;
//}
//
//console.log(unirelementos(arreglo,numero));

//Ejercicio 03
// let entrada=[2,6,1,8];

// function promediodeNumeros(entrada){
// let suma=0;
// let cantidad=entrada.length;
// let promedio=0;
//     entrada.forEach(numero => {
//              suma+=numero;
//         });
//         promedio=suma/cantidad;
//         console.log(promedio);
//         return promedio;
// }
// promediodeNumeros([2,6,1,8]);

//Ejercicio 04
// function numerosPares(entrada){
// let resultado=[];
// let suma=0;
//     resultado=entrada.filter((numero)=>{
//         return numero%2==0;
//     });
//     resultado.forEach(numero => {
//       suma+=numero;
//       return suma;
//  });
//     console.log(suma);

// }
//numerosPares([1, 2, 5, 8, 9, 12, 2, 3]);
//Ejercicio 05

// function booleanoArray(arreglo1, arreglo2){
//     let nuevoArreglo=[];
//     nuevoArreglo=[...arreglo1,...arreglo2];
//     console.log(nuevoArreglo);
//     if(nuevoArreglo.length>=10){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//booleanoArray([2, 5, 2, 3, 7, 2],[1, 5, 3, 3]);

//Ejercicio 06

// function funcionArray(arreglo1,arreglo2){
// let arreglo1x2=[]; 
// let arreglo2x2=[];
// let arreglofinal=[]
// arreglo1x2=arreglo1.map(elemento => {
//                return elemento*2;
//         });

// arreglo2x2=arreglo2.map(elemento => {
//              return    elemento*2;
//         });

//         arreglofinal=[...arreglo1x2,...arreglo2x2];
//         console.log(arreglofinal);
//         return arreglofinal;
// }

// funcionArray([2, 5, 2],[1, 5, 3]);

//Ejercicio 07
// let contrasena=prompt('Ingrese una constraseña').toLowerCase().trim();
// let resultadocorrecto="password";

// if(contrasena===resultadocorrecto){
//     console.log("La contraseña es correcta");
// }
// else {
//     console.log("Introduce la contraseña:password");
// }

//Ejercicio 08
// let edad=Number.parseInt(prompt("Introduce tu edad"));
// let precio=0;
// if(edad<4){
//     console.log("Puedes entrar gratis"+precio);
// }
// else if(edad<18){
//     precio=5;
//     console.log("El costo de la entrada es "+precio);
// }
// else {
//     precio=10;
//     console.log("El costo de la entrada es "+precio);
// }

//Ejercicio 09

//let edad=Number.parseInt(prompt("Introduce tu edad"));
//let ingreso=Number.parseFloat(prompt("¿Cuales son tus ingresos mensuales?"));
//
//if(edad>18 && ingreso>1000){
//    console.log("Si tienes que tributar");
//}
//else {
//    console.log("No tienes que tributar");
//}

//Ejercicio 10

//let diametro=Number.parseFloat(prompt("Ingrese el diametro de una rueda"));
//let grosor=Number.parseFloat(prompt("Ingrese el grosor de una rueda"));
//
//if(diametro>1.4){
//    console.log("La rueda es para un vehículo grande");
//    if(grosor<0.4){
//        console.log("El grosor para esta rueda es inferior al recomendado");
//    }    
//    else {
//       console.log("El grosor es el recomendado");
//    }
//}
//else if(0.8<diametro && diametro<=1.4){
//    console.log("La rueda del vehiculo es mediano");
//        if(grosor<0.25){
//            console.log("El grosor para esta rueda es inferior al recomendado");
//        }
//        else {
//            console.log("El grosor es el recomendado");
//        }
//}
//else {
//    console.log("La rueda es para un vehículo pequeño");
//}

//Ejercicio 11
// let personas = [
    // { nombre: 'boris', hobby: 'correr', salario: 2000 },
    // { nombre: 'luis', hobby: 'cantar', salario: 1500 },
    // { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
    // { nombre: 'percy', hobby: 'cantar', salario: 1100 },
    // { nombre: 'rosa', hobby: 'leer', salario: 3000 },
    // ];
//Hallar quienes tienen el salario mayor a 1200.
// let salarioMayor1200;
// salarioMayor1200=personas.filter((e)=>{
//             return (e.salario>1200);
// });
// console.log(salarioMayor1200);
// //Hallar quien es el primero que tiene como hobby cantar.
// let primeroQueCanta=personas.find((e)=>{
//         return e.hobby==="cantar";
// });
// console.log(primeroQueCanta);

// //Devolver un booleano sí al menos uno de ellos le gusta leer.

// let lesgustaleer=personas.some((e)=>{
//        return e.hobby==='leer';   
// });
// console.log(lesgustaleer);

//Ejercicio 12

//let atencioncliente=[
//    {dia:"lunes",nombre:"Maria"},
//    {dia:"martes",nombre:"Luis"},
//    {dia:"miercoles",nombre:"Antonia"},
//    {dia:"jueves",nombre:"Pedro"},
//    {dia:"viernes",nombre:"Marisa"}
//];
//
//function nombredePersonaxDia(diasemana, arreglo){
//    let resultado="";
//    let mensaje="";
//
//    for(let i=0;i<arreglo.length;i++){
//        if(arreglo[i].dia===diasemana){
//            resultado=arreglo[i].nombre;
//             mensaje="Este dia se encargar "+resultado;
//             console.log(resultado);
//             break;
//        }
//        else {
//            mensaje="No hay servicio";
//          
//        }
//      
//    }
//        console.log(resultado);
//        return mensaje;
//}
//let resultadofuncion=prompt("Ingrese el dia de las semana").toLowerCase().trim();
//console.log(nombredePersonaxDia(resultadofuncion,atencioncliente));
//console.log(resultadofuncion);
//
//

    // atencioncliente.forEach(elemento => {
   
    //              if(elemento.dia===diasemana){
    //               
    //             }    
    //             else {
    //                 return "No hay servicio";
    //             } 
    // });


//Ejercicio 13

let productos =[
    {nombre:"monitor", precio:200},
    {nombre:"teclado",precio:20},
    {nombre:"raton", precio:10}
];

let nombreproducto=prompt("Escriba el producto").toLowerCase();
console.log(nombreproducto);
function preciosProductos(nombreproducto, arreglo){
    let mensaje="no existe";
         for(let i=0;i<arreglo.length;i++){
                if(arreglo[i].nombre===nombreproducto){
                    mensaje="Tiene el precio "+arreglo[i].precio;
                    break;
                }
        } 
        return mensaje;
}
console.log(preciosProductos(nombreproducto,productos));


  // let mensaje="";
        // arreglo.forEach((producto)=>{
        //             if(producto.nombre===nombreproducto){
        //                return mensaje="Tiene el precio"+producto.precio;            
        //             }
        //             else {
        //                 return mensaje="No existe";
        //             }       
        // });  