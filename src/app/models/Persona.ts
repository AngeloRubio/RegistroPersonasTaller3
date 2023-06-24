export class Persona {
    public cedula: string;
    public nombre: string;
    public apellido: string;
    public fechaNacimiento: string;
    public estado: boolean;
  
    constructor(cedula: string, nombre: string, apellido: string, fechaNacimiento: string, estado: boolean) {
      this.cedula = cedula;
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaNacimiento = fechaNacimiento;
      this.estado = estado;
    }
  }