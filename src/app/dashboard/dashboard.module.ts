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
import { ClienteInfoComponent } from './components/cliente-info/cliente-info.component';
import { EstudioInfoComponent } from './components/estudio-info/estudio-info.component';
import { CompraInfoComponent } from './components/compra-info/compra-info.component';



@NgModule({
  declarations: [
    SidebarMenuComponent,
    FooterComponent,
    NavbarComponent,
    DashboardPageComponent,
    DashboardInitialComponent,
    FacturacionPageComponent,
    NuevoPacientePageComponent,
    NuevoEstudioPageComponent,
    ClienteInfoComponent,
    EstudioInfoComponent,
    CompraInfoComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    DashboardRoutingModule
  ],
  exports:[
    SidebarMenuComponent,
    NavbarComponent,
    // DashboardRoutingModule
  ]
})
export class DashboardModule { }
