import { NgModule } from '@angular/core';
import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';

@NgModule({
  imports: [
    InvoiceRoutingModule,
  ],
  declarations: [ InvoiceComponent ]
})
export class InvoiceModule { }
