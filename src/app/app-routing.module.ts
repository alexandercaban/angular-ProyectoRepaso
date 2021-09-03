import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';
import { GuardaGuard } from './guarda.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [GuardaGuard]
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent
  },
  {
    path: 'formulario',
    component: FormulariosReactivosComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
