import { Component } from '@angular/core';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  public cedula = '';
  public nombre = '';
  public apellido = '';
  public fechaNacimiento = '';
  public listaPersonas: Persona[] = [];

  agregarPersona(): void {
    const persona: Persona = new Persona(this.cedula, this.nombre, this.apellido, this.fechaNacimiento, true);
    this.listaPersonas.push(persona);

    // Limpiar los campos del formulario
    this.cedula = '';
    this.nombre = '';
    this.apellido = '';
    this.fechaNacimiento = '';
  }


  eliminarPersona(indice:number): void{
    this.listaPersonas.splice(indice,1);

  }

}
