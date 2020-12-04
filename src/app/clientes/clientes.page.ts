import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  listaDeClientes : Cliente[] = [];

  constructor(private clienteServ : ClienteService,
    private navCtrl : NavController) { }

  ngOnInit() {
   this.clienteServ.listaDeClientes().subscribe(response=>{
    this.listaDeClientes = response as Cliente[];
    console.log(this.listaDeClientes); // retirar
   })
  }

  visualizar(obj : Cliente){
    this.navCtrl.navigateForward(['/clientes-visualizar', obj.id]);
  }

}
