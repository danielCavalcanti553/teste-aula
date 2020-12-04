import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin}

  },
  {
    path: 'clientes-novo',
    loadChildren: () => import('./clientes-novo/clientes-novo.module').then( m => m.ClientesNovoPageModule),
    canActivate : [AngularFireAuthGuard],
    data : {authGuardPipe : redirectToLogin}
  },
  {
    path: 'sair',
    loadChildren: () => import('./sair/sair.module').then( m => m.SairPageModule)
  },
  {
    path: 'clientes-visualizar/:id',
    loadChildren: () => import('./clientes-visualizar/clientes-visualizar.module').then( m => m.ClientesVisualizarPageModule)
  },
  {
    path: 'cliente-atualizar/:id',
    loadChildren: () => import('./cliente-atualizar/cliente-atualizar.module').then( m => m.ClienteAtualizarPageModule)
  },
  {
    path: 'cliente-excluir/:id',
    loadChildren: () => import('./cliente-excluir/cliente-excluir.module').then( m => m.ClienteExcluirPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
