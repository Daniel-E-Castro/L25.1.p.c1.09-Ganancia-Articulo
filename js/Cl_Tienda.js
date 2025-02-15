export default class cl_Tienda {
    constructor() {
        this.acumCosto = 0
        this.acumPrecioVenta = 0
        this.mayor = ""
        this.auxicodigo = 0
    }
    procesar(Arti){
        this.acumCosto += Arti.costo
        this.acumPrecioVenta += Arti.precioVenta

        if(Arti.precioVenta > this.mayor) {
            this.mayor = Arti.precioVenta
            this.auxicodigo = Arti.codigo
            
        }      
    }
    gananciaTotal() {
        return (this.acumPrecioVenta - this.acumCosto)

    }
    codigoArtículoMayorPrecioVenta() {
        return this.auxicodigo

    }

}