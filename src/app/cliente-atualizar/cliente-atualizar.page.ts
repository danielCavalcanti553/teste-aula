import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-cliente-atualizar',
  templateUrl: './cliente-atualizar.page.html',
  styleUrls: ['./cliente-atualizar.page.scss'],
})
export class ClienteAtualizarPage implements OnInit {

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

  this.route.paramMap.subscribe(url=>{

    let id = url.get('id');
    this.clienteServ.buscaClientesPorId(id).subscribe(response=>{
      this.cliente = response;
      console.log(response);
      this.iniciarForm();
    })

  })

}

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      id : [this.cliente.id],
      nome : [this.cliente.nome],
      cpf: [this.cliente.cpf],
      endereco : [this.cliente.endereco],
      numero: [this.cliente.numero],
      cidade : [this.cliente.cidade],
      estado: [this.cliente.estado],
      email : [this.cliente.email],
      telefone: [this.cliente.telefone],  
    })
  }

  atualizar(){

    this.template.loading.then(load=>{
      load.present();
      this.clienteServ.atualizar(this.formGroup.value).subscribe(response=>{
        load.dismiss();
        this.template.myAlert("Atualizado com sucesso");
      },erro=>{
        load.dismiss();
        this.template.myAlert("Erro ao atualizar");
      })
    })

  
  }

}
