/*La empresa TAXI ESPRESS C.A, dedicada al ramo de servicios de carreras, señala que, por el 
*aumento de su cartera de clientes, necesita un sistema automatizado que le permita, llevar ciertas
*estadisticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre, tipo de
*servicio a tomar (1= Largo Urbano, 2= Corto Urbano), edad y sexo(1= Masculino, 2=Femenino). Es 
*significativo para la empresa, obtener un reporte que contenga: a) Cantidad de clientes femeninas 
*mayores de edad, b)Cual ha sido la menor edad atendida, c) Promedio de edad de los clientes.
* Datos de los clientes:
*(nombre,  tipoServi, edad, sexo)
*("Juan", 2, 20, "M" )
*("Ana", 1, 19, "F")
*("Lia", 2, 18, "F")
*("Mary", 1, 15, "F")
*/ 
import Cl_cliente from "./Cl_cliente.js"
import Cl_empresa from "./Cl_empresa.js"

let cliente1 = new Cl_cliente("Juan", 2, 20, "M");
let cliente2 = new Cl_cliente("Ana", 1, 19, "F");
let cliente3 = new Cl_cliente("Lia", 2, 18, "F");
let cliente4 = new Cl_cliente("Mary", 1, 15, "F");
let empresa = new Cl_empresa();

empresa.procesarCliente(cliente1);
empresa.procesarCliente(cliente2);
empresa.procesarCliente(cliente3);
empresa.procesarCliente(cliente4);

let salida = document.getElementById("salida")
salida.innerHTML =`Resultado`
salida.innerHTML += `<br> Cantidad de clientes femeninas mayores de edad: ${empresa.cantidadClienFMayEdad()}`
salida.innerHTML += `<br> Cual ha sido la menor edad atendida: ${empresa.menorEdadCliente()}`
salida.innerHTML += `<br> Promedion de edad de los clientes: ${empresa.promedioEdadClientes()}`