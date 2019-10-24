import { Injectable } from '@angular/core';
import { List } from '../models/List.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  listas:List [] = []; 
  
  constructor(){
    this.cargarStorage();  
  }

  crearLista( titulo: string ){
    const nueva_lista = new List( titulo );
    this.listas.push( nueva_lista );
    this.guardarStorage();
    return nueva_lista.id;
  }

  borrarLista( id: number ){
    console.log( id );
    this.listas = this.listas.filter( listaData => listaData.id !== id );
    this.guardarStorage();
  }
  
  obtenerLista( _id: string | number ){
    const id = Number( _id );
    return this.listas.find( listaData => listaData.id === id );
  }

  guardarStorage(){
    localStorage.setItem( 'data', JSON.stringify( this.listas ) );
  }

  cargarStorage(){
    if( localStorage.getItem( 'data' ) ) {
      this.listas = JSON.parse( localStorage.getItem( 'data' ) );
    }
  }
}