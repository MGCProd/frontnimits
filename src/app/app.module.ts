import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FactMenosComponent } from "./factmenosactiva/factmenosactiva.component";
import {DropdownModule} from 'primeng/dropdown'; // include this for dropdown support
import {CalendarModule} from 'primeng/calendar';  


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    TableModule,
    ButtonModule,
    CardModule,
    DropdownModule, 

    CalendarModule,// dropdown support
    ToastrModule.forRoot(),
  ],
  declarations: [AppComponent, AdminLayoutComponent, InvoiceComponent,FactMenosComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
