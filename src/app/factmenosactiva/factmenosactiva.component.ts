import { Component, OnInit } from "@angular/core";
import { Invoice, Representative } from "../models/invoice";
import { InvoiceService } from "../services/invoice.service";
import { LazyLoadEvent } from "primeng/api";
import { Estados } from "../models/estados";
import { DropdownModule } from "primeng/dropdown"; // include this for dropdown support
import { SelectItem } from "primeng/api";
import { formatDate } from "@angular/common";

@Component({
  selector: "factmenosactiva",
  templateUrl: "./factmenosactiva.component.html",
  styleUrls: ["./factmenosactiva.component.css"],
})
export class FactMenosComponent implements OnInit {
  invoiceStates: Invoice[];
  estados: Estados[];
  selectedEstado: Estados;
  totalRecords: number;
  cols: any[];
  loading: boolean;
  rows = 10;
  id: number;
  private selectedValue: any;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.cols = [
      { field: "histId", header: "ID" },
      { field: "autorizador", header: "Estado" },
      { field: "datetime", header: "Fecha" },
      { field: "autorizacion", header: "Autorización" },
      { field: "autorizacionDevolucion", header: "A.Devolucion" },
      { field: "consultaProtocolo", header: "C.Protocolo" },
      { field: "consultaRegistro", header: "C.Registro" },
      { field: "discapacidad", header: "Discapacidad" },
      { field: "estadoServicio", header: "E.Servicio" },
      { field: "recepcionEventos", header: "R.Eventos" },
      { field: "tiempoMedio", header: "T.Medio" },
    ];

    this.loading = true;

    this.invoiceService.getEstados().then((data) => (this.estados = data));
  }
  /*

  FactMenosDisponibles(event: LazyLoadEvent,estado:String) {
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
     
      this.invoiceService.getInvoicePorAutorizador({q: estado, ...lazyEvent}).then((res) => {
        this.invoiceStates = res;
        this.totalRecords = res.totalItems;
        this.loading = false;
      });
    }, 1000);
  }*/

  FactPorEstados(estado: String) {
    this.loading = true;

    setTimeout(() => {
      this.invoiceService
        .getInvoicePorAutorizador({ q: estado })
        .then((res) => {
          this.invoiceStates = res;
          this.totalRecords = res.totalItems;
          this.loading = false;
        });
    }, 1000);
  }

  FactPorFechas(fecha: String) {
    this.loading = true;

    setTimeout(() => {
      this.invoiceService.getInvoicePorFecha({ q: fecha }).then((res) => {
        this.invoiceStates = res;
        this.totalRecords = res.totalItems;
        this.loading = false;
      });
    }, 1000);
  }

  /*FactTodas(event: LazyLoadEvent) {
  this.loading = true;
  
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

  FactTodas() {
    this.loading = true;

    setTimeout(() => {
      this.invoiceService.getFacturasGuardadas().then((res) => {
        this.invoiceStates = res.invoices;
        this.totalRecords = res.totalItems;
        this.loading = false;
      });
    }, 1000);
  }

  FactMenosDisponibles() {
    this.loading = true;

    setTimeout(() => {
      this.invoiceService.getFactMenosDisponible().then((res) => {
        this.invoiceStates = res.invoices;
        this.totalRecords = res.totalItems;
        this.loading = false;
      });
    }, 1000);
  }

  onChange(event: { value: any }) {
    const value = event.value;
    this.FactPorEstados(value);
    console.log(value);
  }

  onSelectDate(event) {
    const format = "MM-dd-yyyy";
    const locale = "en-US";
    const formattedDate = formatDate(event, format, locale);
    this.FactPorFechas(formattedDate);
  }

  todos(event) {
    this.FactTodas();
  }

  menosDisponible(event) {
    this.FactTodas();
  }
}
