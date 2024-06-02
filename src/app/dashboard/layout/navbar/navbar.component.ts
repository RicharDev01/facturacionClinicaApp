import { Component, EventEmitter, Output } from '@angular/core';
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
      },
      {
        label: 'Facturacion',
        icon: 'pi pi-receipt',
      },
      {
        label: 'Nuevo cliente',
        icon: 'pi pi-user-plus',
      },
      {
        label: 'Nuevo estudio',
        icon: 'pi pi-folder-plus',
      },
    ];

  }


  public showSideMenu(): void {

    this.toolsService.showSidebarMenu(true);
  
  }


}
