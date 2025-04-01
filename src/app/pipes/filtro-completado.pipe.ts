import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';
// se agrega pure : false, significa que cada vez que haya un cambio con el pipe se hace un refresh
@Pipe({
  name: 'filtroCompletado',
  pure : false  
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada:boolean =true ): Lista[] {
    
    return listas.filter( l =>{
                          return l.terminada === completada;
                        });

    
  }

}
