import { Injectable } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from '../interfaces/paciente.interface';
import { Factura } from '../interfaces/factura.interface';

@Injectable({providedIn: 'root'})
export class FacturaService {

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

  constructor(
    private pacienteService: PacienteService
  ) { }

  get dataPaciente(): Paciente {
    return this.pacienteService.getPaciente
  }

  public generarFactura( factura: Factura ): boolean {
    console.log("Factura Generada");

    this.factura.id = this.generadorDeNumeroFactura()

    let pushed = this.listaFactura.push( factura ) // retorna 1 si se hace una insersion 0 sino lo hace

    if( localStorage.getItem("facturaId") ) {

      // esto es porque sino mando a llamar a lo que esta almecenado, 
      // lo nuevo que vaya a generar al salirme de la app, sobreescribiria a lo existente 
      let dbActual = JSON.parse( localStorage.getItem("facturaId")! )

  
      localStorage.setItem("facturaId", JSON.stringify( [...dbActual, this.listaFactura[this.listaFactura.length - 1] ] ))

    } else {
      
      localStorage.setItem("facturaId", JSON.stringify( this.listaFactura ))
    }

    return pushed ? true : false   
    
  }

  private generadorDeNumeroFactura(): number {

    if( localStorage.getItem("facturaId") ) {
    
      // tomo el numero total de los estudios en lista y el id seria el total + 1
      // es decir que si tenemos 5 estudios el siguiente tendra el ID 6
      return JSON.parse(localStorage.getItem("facturaId")!).length + 1
    
    } else {
      return 1
    }

  }


}