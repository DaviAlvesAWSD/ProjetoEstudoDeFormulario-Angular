import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente{
  nome: String = '';
  email: String = '';
  profissao: String = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Empresário', 'Outra'];

  cliente = new Cliente();

  err = false;
  sucess = false;


  salvar(form: NgForm){
    if(form.status == "INVALID"){
      this.err = true;
      this.sucess = false;
    }
    else{
      this.cliente.nome = form.value.primeiroNome;
      this.cliente.email = form.value.emailAddress;
      this.cliente.profissao = form.value.profissao;

      this.sucess = true;
      this.err = false;

      console.log(form);
      console.log(this.cliente);

      form.reset({profissao: ''});
    }

  }
}
