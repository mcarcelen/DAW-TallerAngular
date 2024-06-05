import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './interfaces/product';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, HttpClientModule],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'deberAngular';
  productos: Product[] = [];
  
  constructor(private productService: ProductService){
    productService.obtenerDatos().subscribe(respuesta => {
      this.productos = respuesta as Array<Product>
    });
  }
}
