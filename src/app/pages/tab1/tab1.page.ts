import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor(
    public DeseosServices: DeseosService,
    private router: Router, private alert: AlertController ){
      //this.agregarLista()
    }

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
            
            this.DeseosServices.crearLista( data.titulo );

          }
        }
      ]
    });

    await alert.present();
    
    //this.router.navigateByUrl('/tabs/tab1/agregar');
  }
}
