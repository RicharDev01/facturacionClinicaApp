import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../../../core/services/factura.service';
import { Paciente } from '../../../core/interfaces/paciente.interface';
import { Factura } from '../../../core/interfaces/factura.interface';
import { EstudioService } from '../../../core/services/estudio.service';
import { PacienteService } from '../../../core/services/paciente.service';

@Component({
  selector: 'app-facturacion-page',
  templateUrl: './facturacion-page.component.html',
  styles: ``
})
export class FacturacionPageComponent {

  public factura: Factura = {
    id: 1,
    pacienteId: 1,
    estudioId: 1,
    estado: true,
    cantidad: 1,
    fechaEmision: new Date(),
    precioCompra: 50.00
  }

  public listaFactura: Factura[] = []

  public datosPaciente: Paciente | any = null

  constructor(
    private facturaService: FacturaService,
    private estudioService: EstudioService,
    private pacienteService: PacienteService
  ){ }

  public datosPacienteFn(): void {
    this.datosPaciente = this.facturaService.dataPaciente
  }

  public generarFactura(): void {
    console.log("Factura Generada");  
    
  }


}
