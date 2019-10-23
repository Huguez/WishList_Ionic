import { Component, OnInit } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { List } from 'src/app/models/List.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  
  lista: List;
  nombreItem: string = '';

  constructor(
              private deseosServices: DeseosService,
              private router: ActivatedRoute ){

    const listaId  =this.router.snapshot.paramMap.get( 'id' );

    this.lista = this.deseosServices.obtenerLista( listaId );
    
  }

  ngOnInit() {
  }
  
  borrar( i: number ){
    const index: number = i;
    this.lista.items.splice( index, 1 );
    this.deseosServices.guardarStorage();
  }


  cambioCheck( item: Item ){
    const numPendientes = this.lista.items.filter( itemData => !itemData.completado ).length;

    if( numPendientes === 0 ){
      this.lista.terminada = new Date();
      this.lista.completada = true;
    }else{
      this.lista.terminada = null;
      this.lista.completada = false;
    }
    
    this.deseosServices.guardarStorage();

    console.log({ numPendientes });
  }

  agregarItem(){
    if( this.nombreItem.length === 0  ){
      return;
    }
    
    const nuevoItem = new Item( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this.deseosServices.guardarStorage();
  }
}
