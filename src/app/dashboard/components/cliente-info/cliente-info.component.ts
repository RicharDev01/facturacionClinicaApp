import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styles: ``
})
export class ClienteInfoComponent {

  public emisionFactura: Date | null = null;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.emisionFactura = new Date();
  }


}
