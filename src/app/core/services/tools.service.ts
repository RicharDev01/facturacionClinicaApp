import { EventEmitter, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ToolsService {

  public sidebarVisible: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public showSidebarMenu( visible: boolean ){

    this.sidebarVisible.emit(visible);

  }
  
}