import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  obtenerDatos(){
    return this.http.get('https://picsum.photos/v2/list?page=2&limit=100');
  }
}
