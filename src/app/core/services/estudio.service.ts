
import { Injectable } from '@angular/core'
import { Estudio } from '../interfaces/estudio.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private listaEstudios: Estudio[] = []

  private estudio: Estudio | any = null

  constructor() {

  }

  public agregarEstudio( estudio: Estudio ): boolean {

    estudio.id = this.generadorIdEstudio()

    let pushed = this.listaEstudios.push( estudio ) // retorna 1 si se hace una insersion 0 sino lo hace

    if( localStorage.getItem("estudioId") ) {

      // esto es porque sino mando a llamar a lo que esta almecenado, 
      // lo nuevo que vaya a generar al salirme de la app, sobreescribiria a lo existente 
      let dbActual = JSON.parse( localStorage.getItem("estudioId")! )

  
      localStorage.setItem("estudioId", JSON.stringify( [...dbActual, this.listaEstudios[this.listaEstudios.length - 1] ] ))

    } else {
      
      localStorage.setItem("estudioId", JSON.stringify( this.listaEstudios ))
    }

    return pushed ? true : false    

  }

  private generadorIdEstudio(): number {

    if( localStorage.getItem("estudioId") ) {
    
      // tomo el numero total de los estudios en lista y el id seria el total + 1
      // es decir que si tenemos 5 estudios el siguiente tendra el ID 6
      return JSON.parse(localStorage.getItem("estudioId")!).length + 1
    
    } else {
      return 1
    }

  }

  get obtenerEstudios(): Estudio[] {

    // si esta vacio el localStorage no regresa nada
    if( !localStorage.getItem('estudioId') ) return []

    // convierto a un objeto lo que hay en db local
    let dataResponse = JSON.parse( localStorage.getItem('estudioId')! )
    this.listaEstudios = dataResponse // le asigno el resultado en mi arreglo del servicio
    return this.listaEstudios // retorno el Array de los estudios.

  }

  get obtenerEstudio(): Estudio {
    return this.estudio
  }

}
