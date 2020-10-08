import 'ag-grid-enterprise'

import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AgChartsAngularModule } from 'ag-charts-angular'
import { AgGridModule } from 'ag-grid-angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChartgridComponent } from './chartgrid/chartgrid.component'
import { HomeComponent } from './home/home.component'
import { MaterialModule } from './material.module'
import { SimplechartComponent } from './simplechart/simplechart.component'
import { SimplegridComponent } from './simplegrid/simplegrid.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimplegridComponent,
    ChartgridComponent,
    SimplechartComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    AgChartsAngularModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
