import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';
import { List } from 'src/app/models/List.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  
  //@ViewChild( ListasComponent ) terminada: boolean;

  constructor(  private router: Router, public deseosServices: DeseosService,  private alert: AlertController ){}

  async agregarLista(){
    const alert = await this.alert.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar', 
          role: 'cancel',
          handler: () => {
            console.log("Cancelar");
          }
        },{
          text: 'Crear',
          handler: (data) => {
            
            if( data.titulo.length === 0 ){
              return;
            }
            const id = this.deseosServices.crearLista( data.titulo );
            this.router.navigateByUrl( `${ this.router.url }/agregar/${ id }` );            
          }
        }
      ]
    });
    await alert.present(); 
  }

  listaSeleccionada( lista: List ){
    this.router.navigateByUrl( `/tabs/tab1/agregar/${ lista.id }` );   
  }

}
