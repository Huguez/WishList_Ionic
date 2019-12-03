import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { List } from '../../models/List.model';
import { AlertController, IonList } from '@ionic/angular';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList, {static: true } ) lista: IonList;

  @Input() terminada: boolean = true;

  constructor( private router: Router, public deseosServices: DeseosService, private alert: AlertController ){}
  
  listaSeleccionada( lista: List ){
    this.router.navigateByUrl( `${ this.router.url }/agregar/${ lista.id }` );   
  }
  
  borrarLista( lista: List ){
    this.deseosServices.borrarLista( lista.id );
  }
  
  async cambiarNombre( lista: List ){
    const alert = await this.alert.create({
      header: 'Cambiar Nombre Lista',
      inputs: [
        {
          name: 'titulo',
          value: lista.titulo,
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar', 
          role: 'cancel'
        },{
          text: 'Cambiar',
          handler: ( data ) => {
            
            if( data.titulo.length === 0 ){
              return;
            }
            lista.titulo = data.titulo;
            this.deseosServices.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present(); 
  }

  ngOnInit() {}
}