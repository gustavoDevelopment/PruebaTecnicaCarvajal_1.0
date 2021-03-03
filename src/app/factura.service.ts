import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private getFacturarEndPoint="http://localhost:8080/carvajal/pruebatecnica/getFacturas";
  private getFacturasFiltroEndPoint="http://localhost:8080/carvajal/pruebatecnica/getFacturasFiltro";
  constructor(private http:HttpClient) { }

  getFacturas():Observable<Factura[]>{
    console.log("Traer Todas las Facturas");
    return this.http.get<Factura[]>(`${this.getFacturarEndPoint}`);
  }  

  getFacturasFiltro(params:any){
    console.log("Llamdo al boton de consultar",params);
    return this.http.post<Factura[]>(`${​​this.getFacturasFiltroEndPoint}`, params);
  }  
}
