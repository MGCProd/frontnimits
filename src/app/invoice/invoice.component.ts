import { Component, OnInit } from "@angular/core";
import { Invoice, Representative } from "../models/invoice";
import { InvoiceService } from "../services/invoice.service";
import { LazyLoadEvent } from "primeng/api";

@Component({
  selector: "invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"],
})
export class InvoiceComponent implements OnInit {
  invoiceStates: Invoice[];
  totalRecords: number;
  cols: any[];
  loading: boolean;
  rows = 10;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.cols = [
      { field: "histId", header: "ID" },
      { field: "autorizador", header: "Estado" },
      { field: "datetime", header: "Datetime" },
      { field: "autorizacion", header: "Autorización" },
      { field: "autorizacionDevolucion", header: "Autorización Devolucion" },
      { field: "consultaProtocolo", header: "Consulta Protocolo" },
      { field: "consultaRegistro", header: "Consulta Registro" },
      { field: "discapacidad", header: "Discapacidad" },
      { field: "estadoServicio", header: "Estado Servicio" },
      { field: "recepcionEventos", header: "Recepcion Eventos" },
      { field: "tiempoMedio", header: "Tiempo Medio" },
    ];

    this.loading = true;
  }

  /*
  loadInvoicesStatesHistory(event: LazyLoadEvent) {
    this.loading = true;
    console.log(event);
    

    let lazyEvent = {
      pageNo: event.first / event.rows,
      pageSize: event.rows,
    };
    if (event.sortField !== undefined) {
      lazyEvent["sortBy"] = event.sortField;
    }
    setTimeout(() => {
     
       this.invoiceService.getInvoiceStatesHistory(lazyEvent).then((res) => {
        this.invoiceStates = res.invoices;
        this.totalRecords = res.totalItems;
        this.loading = false;
      });
    }, 1000);
  }*/
}
