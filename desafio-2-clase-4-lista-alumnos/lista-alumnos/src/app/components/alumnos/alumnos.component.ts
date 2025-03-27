import { Component } from '@angular/core';
import { Alumno } from './interfaces/Alumno';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  public listaAlumnos: Alumno[] = [
    {
      name: 'Rodrigo',
      lastName: 'Jara',
      note: 20,
      isApproved: true,
    },
    {
      name: 'Phool',
      lastName: 'Sovero',
      note: 15,
      isApproved: true,
    },
    {
      name: 'Gino',
      lastName: 'Ibanez',
      note: 10,
      isApproved: false,
    },
  ];

}
