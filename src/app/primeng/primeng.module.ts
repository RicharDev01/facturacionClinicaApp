import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass'
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    AvatarModule,
    StyleClassModule,
    MenubarModule,
    CardModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    SidebarModule,
    AvatarModule,
    StyleClassModule,
    MenubarModule,
    CardModule,
    TableModule,
  ]
})
export class PrimengModule { }
