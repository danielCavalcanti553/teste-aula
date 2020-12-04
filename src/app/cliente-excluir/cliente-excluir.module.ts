import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteExcluirPageRoutingModule } from './cliente-excluir-routing.module';

import { ClienteExcluirPage } from './cliente-excluir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteExcluirPageRoutingModule
  ],
  declarations: [ClienteExcluirPage]
})
export class ClienteExcluirPageModule {}
