import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../core/services/paciente.service';
import { Paciente } from '../../../core/interfaces/paciente.interface';

@Component({
  selector: 'app-nuevo-paciente-page',
  templateUrl: './nuevo-paciente-page.component.html',
  styles: ``
})
export class NuevoPacientePageComponent {

  public listaPacientes: Paciente[] = []

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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listaPacientes = this.pacienteService.getListaPacientes
  }

  public onSubmit(){
    let res: boolean = this.pacienteService.agregarPaciente( this.pacienteForm.value )
    if ( res ) {
      this.pacienteForm.reset()
    } else {
      alert("Hubo un error, no se agrego el paciente")
    }
  }



}
