import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/List.model';


@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: List[], completada: boolean = true ): List[] {
    return listas;
    //return listas.filter( lista => lista.completada === completada );
  }

}
