import { ListaItem } from "./lista-item.model";

export class Lista{
 
    id:number;          //clave primaria
    titulo:string;      //nombre de la lista de deseos
    creadaEn: Date;     //fecha de creación
    terminadaEn: Date;  //fecha de término
    terminada: boolean; //indicador si la tarea está completada
    items: ListaItem[]; //arreglo de items

    constructor(titulo:string){
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime(); //se asigna como id el instante de tiempo de creación
    }

}