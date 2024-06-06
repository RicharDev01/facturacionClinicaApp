import { Component } from '@angular/core';
import { Paciente } from '../../../core/interfaces/paciente.interface';
import { PacienteService } from '../../../core/services/paciente.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styles: ``
})
export class ClienteInfoComponent {

  public emisionFactura: Date | null = null
  public paciente: Paciente | any = null

  public formBuscarPaciente: FormGroup = new FormGroup({
    buscarPaciente: new FormControl<string>('', { nonNullable: true })
  })


  constructor(
    private pacienteService: PacienteService
  ){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.emisionFactura = new Date();
  }

  public buscarPacienteByDUI( ): void {

    let paciente = this.pacienteService.pacienteById( this.formBuscarPaciente.value.buscarPaciente )

    this.paciente = paciente[0]

  }


  get nombreCompleto(): string {
    return `${this.paciente.nombre} ${this.paciente.apellido}`
  }

  get edadPaciente(): number {

    const fechaNacimiento = new Date(this.paciente.fechaNac);
    const fechaActual = new Date();
    const diferenciaMilisegundos = fechaActual.getTime() - fechaNacimiento.getTime();
    const segundos = diferenciaMilisegundos / 1000;
    const minutos = segundos / 60;
    const horas = minutos / 60;
    const dias = horas / 24;
    const year = dias / 365;
    const edad = Math.floor(year);
     
    return edad
  }

}
