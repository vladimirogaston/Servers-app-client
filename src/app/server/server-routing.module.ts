import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './server.component';

const routes: Routes = [
  {
    path: "", children: [
      {
        path: "server-list", component: ServerComponent
      },
      { path: '**', redirectTo: "server-list" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
