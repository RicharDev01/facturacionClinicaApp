import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../core/interfaces/factura.interface';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styles: ``
})
export class DashboardPageComponent implements OnInit {


  public totalPacientes: number = 0;
  public totalVenta: number = 0; // el precio total de las ventas del dia
  public totalCompras: number = 0; // el conteo total de los estudios vendidos del  dia. 

  public listaCompras: Factura[] = [];

  constructor() {}

  ngOnInit(): void {

    let compra1: Factura = {
      id: 1,
      estudioId: 1,
      pacienteId: 1,
      estado: true,
      fechaEmision: new Date(),
      precioCompra: 50,
      cantidad: 1

    }

    this.listaCompras.push(compra1)
  }

}
