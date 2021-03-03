import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';
import {NgModule} from '@angular/core'
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {  
  nmrFctr:number;
  ntClnt:string;
  facturas:Factura[]=[];
  constructor(private facturaService:FacturaService) { }
  ngOnInit(): void {

  }

  getFacturas(){
    this.facturaService.getFacturas().subscribe((data) =>{      
      this.facturas=data;      
      console.log(this.facturas);      
    });
  }

  consultar(){
    let params = {
      numeroFactura: this.nmrFctr,
      nitCliente: this.ntClnt
    }    
    this.facturaService.getFacturasFiltro(params).subscribe((data) =>{      
      this.facturas=data;      
      console.log(this.facturas);      
    });    
  }
}
