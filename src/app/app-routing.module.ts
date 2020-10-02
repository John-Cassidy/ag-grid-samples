import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { SimplegridComponent } from './simplegrid/simplegrid.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'simplegrid', component: SimplegridComponent },
  // {
  //   path: 'manager',
  //   loadChildren: () =>
  //     import('src/app/manager/manager.module').then((m) => m.ManagerModule),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('src/app/user/user.module').then((m) => m.UserModule),
  // },
  // {
  //   path: 'pos',
  //   loadChildren: () => import('src/app/pos/pos.module').then((m) => m.PosModule),
  // },
  // {
  //   path: 'inventory',
  //   loadChildren: () =>
  //     import('src/app/inventory/inventory.module').then((m) => m.InventoryModule),
  // },
  // { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
