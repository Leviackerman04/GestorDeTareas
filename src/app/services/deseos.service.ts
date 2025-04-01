import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas :Lista [] = [];

  constructor() { 

    this.cargarStorage();
    
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){
    // si no hay nada en localstorage, hay un null, debemos validar
    if (localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }
  }

  obtenerLista(id: string | number){
    id = Number(id);

    return this.listas.find( listaData =>{
        return listaData.id === id;
    })
  }

  borrarLista(lista: Lista){
    // sobrescribo la lista con todos los elementos excepto el que quiero eliminar
     this.listas = this.listas.filter(listaData =>{
                      return listaData.id !== lista.id;
                  });
     this.guardarStorage();
  }

  

}



