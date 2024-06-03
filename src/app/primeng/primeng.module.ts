import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass'
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';


@NgModule({

  exports: [
    ButtonModule,
    SidebarModule,
    AvatarModule,
    StyleClassModule,
    MenubarModule,
    CardModule,
    TableModule,
    InputTextModule,
    PanelModule
  ]
})
export class PrimengModule { }
