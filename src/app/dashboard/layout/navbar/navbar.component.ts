import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToolsService } from '../../../core/services/tools.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(
    private toolsService: ToolsService
  ) {

  } 

  ngOnInit() {

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: ''
      },
      {
        label: 'Facturacion',
        icon: 'pi pi-receipt',
        routerLink: 'facturacion'
      },
      {
        label: 'Nuevo paciente',
        icon: 'pi pi-user-plus',
        routerLink: 'nuevo-paciente'
      },
      {
        label: 'Nuevo estudio',
        icon: 'pi pi-folder-plus',
        routerLink: 'nuevo-estudio'
      },
    ];

  }


  public showSideMenu(): void {

    this.toolsService.showSidebarMenu(true);
  
  }


}
