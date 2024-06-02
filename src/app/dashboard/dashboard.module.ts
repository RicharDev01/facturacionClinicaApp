import { NgModule } from '@angular/core';

// modulos
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { DashboardRoutingModule } from './dashboard-routing.routing';

// componentes
import { SidebarMenuComponent } from './layout/sidebar-menu/sidebar-menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardInitialComponent } from './pages/dashboard-initial/dashboard-initial.component';
import { FacturacionPageComponent } from './pages/facturacion-page/facturacion-page.component';
import { NuevoPacientePageComponent } from './pages/nuevo-paciente-page/nuevo-paciente-page.component';
import { NuevoEstudioPageComponent } from './pages/nuevo-estudio-page/nuevo-estudio-page.component';



@NgModule({
  declarations: [
    SidebarMenuComponent,
    FooterComponent,
    NavbarComponent,
    DashboardPageComponent,
    DashboardInitialComponent,
    FacturacionPageComponent,
    NuevoPacientePageComponent,
    NuevoEstudioPageComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    DashboardRoutingModule
  ],
  exports:[
    SidebarMenuComponent,
    NavbarComponent
  ]
})
export class DashboardModule { }
