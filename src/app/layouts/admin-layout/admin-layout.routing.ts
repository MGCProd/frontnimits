import { Routes } from '@angular/router';
import { InvoiceComponent } from '../../invoice/invoice.component';
import { FactMenosComponent } from '../../factmenosactiva/factmenosactiva.component';


export const AdminLayoutRoutes: Routes = [
   { path: 'facturas',   component: FactMenosComponent }
    
];
