import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes-visualizar',
  templateUrl: './clientes-visualizar.page.html',
  styleUrls: ['./clientes-visualizar.page.scss'],
})
export class ClientesVisualizarPage implements OnInit {

  cliente : Cliente = new Cliente();

  constructor(private clienteServ : ClienteService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{

      let id = url.get('id');
      this.clienteServ.buscaClientesPorId(id).subscribe(response=>{
        this.cliente = response;
        console.log(response);
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/cliente-atualizar', this.cliente.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/cliente-excluir', this.cliente.id]);
  }

}
