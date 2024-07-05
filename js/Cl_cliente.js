export default class Cl_cliente{
    constructor(nombre, tipoServi, edad, sexo){
        this.nombre = nombre;
        this.tipoServi = tipoServi;
        this.edad = edad;
        this.sexo = sexo;
    }
    set nombre(n){
        this._nombre = n;
    }
    get nombre(){
        return this._nombre;
    }
    set tipoServi(t){
        this._tipoServi = t;
    }
    get tipoServi(){
        return this._tipoServi;
    }
    set edad(ed){
        this._edad = ed;
    }
    get edad(){
        return this._edad;
    }
    set sexo(s){
        this._sexo = s;
    }
    get sexo(){
        return this._sexo;
    }
    
}