import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home/home.component';

import {ClientesService} from './clientes.service'
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule    
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
