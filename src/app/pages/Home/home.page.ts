import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage {
    tareasPendientes: string[] = [];
    tareasTerminadas: string[] = [];

    deseos: Lista[] = [];
    
      constructor(public deseosService: DeseosService,
                  private router:Router,
                  private alertCtlr: AlertController) {
    
        this.deseos = deseosService.listas;
        this.cargarTareas();
      }
    cargarTareas() {
        // Aquí se pueden cargar las tareas desde un servicio o almacenamiento
        this.tareasPendientes = ['Tarea 1', 'Tarea 2'];
        this.tareasTerminadas = ['Tarea 3', 'Tarea 4'];
    }

    obtenerListas(){
      return this.tareasTerminadas;
    }

    obtenerTareas(){
        return this.tareasPendientes;
    }
    agregarTarea(tarea: string) {
        this.tareasPendientes.push(tarea);
    }

    irAPagina(pagina: string) {
      if (pagina === 'tareas-pendientes') {
        this.router.navigate(['/tabs/tab1']); // Navega a la página de tareas pendientes
      } else if (pagina === 'tareas-terminadas') {
        this.router.navigate(['/tabs/tab2']); // Navega a la página de tareas terminadas
      }
    }

    marcarComoTerminada(tarea: string) {
        const index = this.tareasPendientes.indexOf(tarea);
        if (index > -1) {
            this.tareasPendientes.splice(index, 1);
            this.tareasTerminadas.push(tarea);
        }
    }

    async  agregarLista(){
   
        const alert = await this.alertCtlr.create({
          header: 'Nueva lista',
          inputs:[
            {
              name:'titulo',
              type:'text',
              placeholder:'Nombre de la lista'
            }
          ],
          buttons: [
            {
              text: 'Cancelar',
              role:'cancel',
              handler: ()=>{
                console.log('cancelar');
                
              }
            },
            {
              text: 'Crear',
              handler: (data)=>{
                // console.log(data);
                if (data.titulo.length === 0) {
                    return;
                }
                // necesito ahora redireccionar a la página de detale
                const listaId = this.deseosService.crearLista(data.titulo);
                this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
                
    
              }
    
            }
          ],
        });
    
        await alert.present();
      }
}