import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../core/services/paciente.service';

@Component({
  selector: 'app-nuevo-paciente-page',
  templateUrl: './nuevo-paciente-page.component.html',
  styles: ``
})
export class NuevoPacientePageComponent {

  public pacienteForm: FormGroup = this.formBuilder.group({
    id: [0, Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fechaNac: [Date, Validators.required],
    DUI: ['', Validators.required],
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    direccion: ['', Validators.required],
  })

  constructor(
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService
  ){}

  public onSubmit(){
    let res: boolean = this.pacienteService.agregarPaciente( this.pacienteForm.value )
    if ( res ) {
      this.pacienteForm.reset()
    } else {
      alert("Hubo un error, no se agrego el paciente")
    }
  }

}
