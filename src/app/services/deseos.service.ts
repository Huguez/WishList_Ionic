import { Injectable } from '@angular/core';
import { List } from '../models/List.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
