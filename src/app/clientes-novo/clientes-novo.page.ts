import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-clientes-novo',
  templateUrl: './clientes-novo.page.html',
  styleUrls: ['./clientes-novo.page.scss'],
})
export class ClientesNovoPage implements OnInit {

  formGroup : FormGroup;
  cliente : Cliente = new Cliente();

  constructor(private formBuilder : FormBuilder,
    private template : TemplateService,
    private route: ActivatedRoute,
    private clienteServ : ClienteService
) {
  this.iniciarForm();
}

ngOnInit() {

}

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      id : [],
      nome : [],
      cpf: [],
      endereco : [],
      numero: [],
      cidade : [],
      estado: [],
      email : [],
      telefone: [] 
    })
  }

  cadastrar(){

    this.template.loading.then(load=>{
      load.present();
      this.clienteServ.cadastrar(this.formGroup.value).subscribe(response=>{
        load.dismiss();
        this.template.myAlert("Cadastrado com sucesso");
        this.formGroup.reset();
      },erro=>{
        load.dismiss();
        this.template.myAlert("Erro ao cadastrar");
      })
    })

  
  }

}
