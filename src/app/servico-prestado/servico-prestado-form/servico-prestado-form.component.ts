import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes : Cliente[] = [];
  servicoPrestado: ServicoPrestado;

  constructor(private servicoPrestadoService : ServicoPrestadoService,
               private clienteService : ClientesService) { 
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
        response => {
          this.clientes = response;
        }
    );
  }

  onSubmit(): void{
    this.servicoPrestadoService.salvar(this.servicoPrestado)
        .subscribe( response => {
          //this.servicoPrestado = response;
        }, errorResponse => {
          
        }
      );
  }

}
