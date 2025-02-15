/* Conociendo el código, costo y el precio de venta de los artículos que vende una tienda, se
desea hacer un procesamiento que determine la ganancia total que tendría la empresa al
venderlos todos, y también el código del artículo con mayor precio de venta.

El encargado de la tienda informa que dispone de los siguientes artículos: 
888 (costo $10, precio venta $15), 
777 (costo $20, precio $25), 
999 ($15, $25), 
666 ($25, $35), 
111 ($50, $70),
333 ($40, $50), 
444 ($80, $100), 
222 ($5, $10)

SALIDA
Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444 
*/

import cl_Articulo from "./Cl_Articulo.js";
import cl_Tienda from "./Cl_Tienda.js";

let Arti1 = new cl_Articulo(888, 10, 15)
let Arti2 = new cl_Articulo(777, 20, 25)
let Arti3 = new cl_Articulo(999, 15, 25)
let Arti4 = new cl_Articulo(666, 25, 35)
let Arti5 = new cl_Articulo(111, 50, 70)
let Arti6 = new cl_Articulo(333, 40, 50)
let Arti7 = new cl_Articulo(444, 80, 100)
let Arti8 = new cl_Articulo(222, 5, 10)

let tienda = new cl_Tienda()

tienda.procesar(Arti1)
tienda.procesar(Arti2)
tienda.procesar(Arti3)
tienda.procesar(Arti4)
tienda.procesar(Arti5)
tienda.procesar(Arti6)
tienda.procesar(Arti7)
tienda.procesar(Arti8)

let salida = document.getElementById("salida");
salida.innerHTML = `
Ganancia Total: ${tienda.gananciaTotal()}$
<br>Código del artículo con mayor precio de venta: ${tienda.codigoArtículoMayorPrecioVenta()}
`