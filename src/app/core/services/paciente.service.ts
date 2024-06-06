import { Injectable } from '@angular/core'
import { Paciente } from '../interfaces/paciente.interface'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private paciente: Paciente | any = null 

  private listaPacientes: Paciente[] = []

  constructor() {}

  public agregarPaciente( paciente: Paciente ): boolean {
    
    paciente.id = this.generadorIdPaciente()
    
    let agregado = this.listaPacientes.push( paciente ) // retorna 1 si se hace una insersion 0 sino lo hace


    if( localStorage.getItem("pacienteId") ) {

      // esto es porque sino mando a llamar a lo que esta almecenado, 
      // lo nuevo que vaya a generar al salirme de la app, sobreescribiria a lo existente 
      let dbActual = JSON.parse( localStorage.getItem("pacienteId")! )

  
      localStorage.setItem("pacienteId", JSON.stringify( [...dbActual, this.listaPacientes[this.listaPacientes.length - 1] ] ))

    } else {
      
      localStorage.setItem("pacienteId", JSON.stringify( this.listaPacientes ))
    }

    return agregado ? true : false
  
  }

  get getListaPacientes(): Paciente[] {


    // si esta vacio el localStorage no regresa nada
    if( !localStorage.getItem('pacienteId') ) return []

    // convierto a un objeto lo que hay en db local
    let dataResponse = JSON.parse( localStorage.getItem('pacienteId')! )
    this.listaPacientes = dataResponse // le asigno el resultado en mi arreglo del servicio
    return this.listaPacientes // retorno el Array de los estudios.


  }

  private generadorIdPaciente(): number {

    if( localStorage.getItem("pacienteId") ) {
    
      // tomo el numero total de los estudios en lista y el id seria el total + 1
      // es decir que si tenemos 5 estudios el siguiente tendra el ID 6
      return JSON.parse(localStorage.getItem("pacienteId")!).length + 1
    
    } else {
      return 1
    }
  }


  public pacienteById( identificador: string ): Paciente[] {

    if ( localStorage.getItem('pacienteId') ) {

      let arrPacientes = JSON.parse( localStorage.getItem('pacienteId')! )

      let paciente = arrPacientes.filter( (paciente: Paciente) => paciente.DUI === identificador )
      
      this.paciente = paciente

      return paciente
      

    } else {

      return []
    }


  }

  get getPaciente(): Paciente {
    return this.paciente
  }

}