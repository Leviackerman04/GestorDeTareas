import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  // hago una referencia al componente ionList
   @ViewChild(IonList) lista: IonList;

   @Input() terminada = true;
   
  

  constructor(public deseosService: DeseosService,
              private router:Router,
              private alertCtlr: AlertController) {
      
   }

  ngOnInit() {}

  listaSeleccionada(lista: Lista){

    if (this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);  
    }else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);  
    }
  
  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
    console.log(lista);
    
     
  }

  async editarNombreLista(lista: Lista){

    console.log(lista);
    
    const alert = await this.alertCtlr.create({
      header: 'Editar Nombre Lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          value: lista.titulo,
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role:'cancel',
          handler: ()=>{
            console.log('cancelar');
            this.lista.closeSlidingItems();  
            
          }
        },
        {
          text: 'Editar',
          handler: (data)=>{
            // console.log(data);
            if (data.titulo.length === 0) {
                return;
            }
            // envio el nombre para editarlo
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();  
            this.lista.closeSlidingItems();     
          }

        }
      ],
    });

    await alert.present();
  }

}
