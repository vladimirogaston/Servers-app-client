import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerDialogComponent } from './server-dialog/server-dialog.component';
import { ServerRoutingModule } from './server-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StatusSelectComponent } from './status-select/status-select.component';
import { ServerService } from './shared/server.service';

@NgModule({
  declarations: [
    ServerComponent,
    ServerListComponent,
    ServerDialogComponent,
    StatusSelectComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    ServerService
  ],
  entryComponents: [
    StatusSelectComponent
  ]
})
export class ServerModule { }