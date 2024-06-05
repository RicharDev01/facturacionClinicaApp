import { Component, OnInit } from '@angular/core';
import { EstudioService } from '../../../core/services/estudio.service';
import { Estudio } from '../../../core/interfaces/estudio.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-estudio-page',
  templateUrl: './nuevo-estudio-page.component.html',
  styles: ``
})
export class NuevoEstudioPageComponent implements OnInit {

  public listaEstudios: Estudio[] = []


  public estudioForm: FormGroup = this.formBuilder.group({
    id: [0, Validators.required],
    nombre: ['', Validators.required],
    precio: [0, Validators.required],
  })

  constructor(
    private estudioA: EstudioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listaEstudios = this.estudioA.obtenerEstudios
  }

  public onSubmit(): void {
    let res: boolean = this.estudioA.agregarEstudio( this.estudioForm.value )
    if ( res ) {
      this.estudioForm.reset()
    } else {
      alert("Hubo un error, no se agrego el estudio")
    }

  }


}
