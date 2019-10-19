import { Injectable } from '@angular/core';
import { List } from '../models/List.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  listas:List [] = []; 
  
  constructor(){}
  
}
