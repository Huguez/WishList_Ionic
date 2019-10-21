import { Injectable } from '@angular/core';
import { List } from '../models/List.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  listas:List [] = []; 
  
  constructor(){
    const lista_1 = new List("Movies");
    const Lista_2 = new List("algo");
    
    this.listas.push( lista_1, Lista_2 );
  }
  
}
