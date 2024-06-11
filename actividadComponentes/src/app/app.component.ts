import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from './shared/rutas/inicio/inicio.component';
import { MenuComponent } from './shared/componentes/menu/menu.component';
import { FooterPageComponent } from './shared/componentes/footer-page/footer-page.component';
import { LogoComponent } from './shared/componentes/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, MenuComponent, FooterPageComponent, LogoComponent, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividadComponentes';
}
