import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteExcluirPage } from './cliente-excluir.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteExcluirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteExcluirPageRoutingModule {}
