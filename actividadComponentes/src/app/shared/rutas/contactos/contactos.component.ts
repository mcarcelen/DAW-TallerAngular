import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactoComponent {
  titulo:string="Contactos"

  medios:any[]=[
    {texto:"En Twitter"},
    {texto: "En Facebook"},
    {texto: "Por correo electrnico"}
  ]
}
