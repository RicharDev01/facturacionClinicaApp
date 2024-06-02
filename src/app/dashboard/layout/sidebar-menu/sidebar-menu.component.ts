import { Component, EventEmitter, Input, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { ToolsService } from '../../../core/services/tools.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styles: ``
})
export class SidebarMenuComponent {

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  public sidebarVisible: boolean = false;

  closeCallback( e: any ): void {

    this.sidebarRef.close(e);

    this.toolsService.showSidebarMenu(false);
    
  }

  constructor(
    private toolsService: ToolsService
  ){
    this.toolsService.sidebarVisible.subscribe( (value) => this.sidebarVisible = value); 
  }

  


}
