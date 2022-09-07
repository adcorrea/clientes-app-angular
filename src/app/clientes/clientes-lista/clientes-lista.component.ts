import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../clientes.service';
import { Cliente } from '../cliente';

import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;

  mensagemSucesso: string;
  mensagemErro: string;

  sucesso: boolean;

  constructor(private service: ClientesService,
                    private router: Router) { }

  ngOnInit(): void {
    this.service.getClientes()
                      .subscribe(response => {
                        this.clientes = response;
                      });
  }

  novoCadastro():void{
    this.router.navigate(['/clientes-form']);
  }

  prepararDelecao(cliente: Cliente): void{
    this.clienteSelecionado = cliente;
  }

  deletarCliente(): void{
    this.service.deletar(this.clienteSelecionado)
                      .subscribe(response => {
                        this.mensagemSucesso = 'Cliente excluido com sucesso!';   
                        this.sucesso = true;     
                        this.ngOnInit();                
                      },
                      errorResponse =>{
                        this.mensagemErro = 'Erro ao excluir o cliente!'
                        this.sucesso = false;
                      });
    
  }

}
