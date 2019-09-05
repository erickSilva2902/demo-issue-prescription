import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrescriptionFormComponent } from './prescription-form/prescription-form.component';
import { PrescriptionService } from './prescription.service';

@NgModule({
  declarations: [
    AppComponent,
    PrescriptionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PrescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
