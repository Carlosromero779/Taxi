export default class Cl_empresa{
    constructor(){
        this.contChicasMayEdad = 0;
        this.edadMenor = 100;
        this.acumEdad = 0;
        this.contClientes = 0;
    }
    procesarCliente(cliente){
        if(cliente.sexo=="F"){
        if(cliente.edad >= 18)
            this.contChicasMayEdad++;
        }
        if(cliente.edad < this.edadMenor){
               this.edadMenor = cliente.edad;
           this.contClientes++;
           this.acumEdad+= cliente.edad;
    }
    }
    cantidadClienFMayEdad(){
        return this.contChicasMayEdad;
    }
    menorEdadCliente(){
        return this.edadMenor;
    }
    promedioEdadClientes(){
        return this.acumEdad/this.contClientes;
    }
}