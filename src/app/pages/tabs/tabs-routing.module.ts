import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../Home/home.module').then(m => m.HomeModule)
      },
      {
        path:'agregar/:listaId',
        loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
      },
      {
        path: 'tab1',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path:'agregar/:listaId',
            loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
          }
         
        ]
      },
      {
        path: 'tab2',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          {
            
            path:'agregar/:listaId',
            loadChildren: () => import('../agregar/agregar.module').then(m => m.AgregarPageModule)
          
          }
        ]
        
      },      
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
