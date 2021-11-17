import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Invoice } from "../models/invoice";

@Injectable({
  providedIn: "root",
})
export class InvoiceService {
  constructor(private http: HttpClient) {}
  
  getFacturasGuardadas() {
    return this.http
      .get<any>("/api/all")
      .toPromise()
      .then(res =>{
        return res;
      });
  }

 

  getFactMenosDisponible() {
    return this.http
      .get<any>("/api/disponibilidad/menos")
      .toPromise()
      .then(res =>{
        return res;
      });
  }

  getEstados() {
    return this.http
      .get<any>("/api/estados")
      .toPromise()
      .then(res =>{
        return res;
      });
  }

  getInvoicePorAutorizador(params) {
    return this.http
      .get<any>("/api/buscar/autorizador", { params: params })
      .toPromise()
      .then(res =>{
        return res;
      });
  }

  getInvoicePorFecha(params) {
    return this.http
      .get<any>("/api/buscar/fecha", { params: params })
      .toPromise()
      .then(res =>{
        return res;
      });
  }
}
