import { Item } from './item.model';

export class List {
    
    id: number;
    titulo: string;
    creada: Date;
    terminada: Date;
    completada: boolean;
    items: Item[];

    constructor( t: string ){
        this.titulo = t;
        this.creada = new Date();
        this.completada = false;
        this.items = [];

        this.id = new Date().getTime();
        
    }
    
}