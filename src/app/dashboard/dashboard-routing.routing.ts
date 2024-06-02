import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInitialComponent } from './pages/dashboard-initial/dashboard-initial.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NuevoEstudioPageComponent } from './pages/nuevo-estudio-page/nuevo-estudio-page.component';
import { NuevoPacientePageComponent } from './pages/nuevo-paciente-page/nuevo-paciente-page.component';
import { FacturacionPageComponent } from './pages/facturacion-page/facturacion-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardInitialComponent,
    children: [
      {path: '', component: DashboardPageComponent},
      {path: 'nuevo-estudio', component: NuevoEstudioPageComponent},
      {path: 'nuevo-paciente', component: NuevoPacientePageComponent},
      {path: 'facturacion', component: FacturacionPageComponent },
    ]
  }
]

@NgModule({

  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]

})
export class DashboardRoutingModule {

}