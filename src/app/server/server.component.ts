import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ServerService } from './shared/server.service';
import { Server } from './shared/server-model';
import { MatDialog } from '@angular/material/dialog';
import { StatusSelectComponent } from './status-select/status-select.component';
import { ServerDialogComponent } from './server-dialog/server-dialog.component';
import { Subscription, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy, AfterViewInit {
  
  dataSource: Server[] = [];
  subscription!: Subscription;

  constructor(private dialog: MatDialog, private serverService: ServerService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.subscription = this.serverService.findServers$()
      .subscribe(records => {
        let arr: Server[] = []
        this.dataSource = arr.concat(records);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onNewServer(): void {
    this.dialog.open(ServerDialogComponent, {
      height: '500px',
      width: '250px'
    });
  }

  async onStatusSelect() {
    const dialogRef = this.dialog.open(StatusSelectComponent, {
      width: '250px'
    });

    let statusSelect = await lastValueFrom(dialogRef.afterClosed())
    this.dataSource = await lastValueFrom(this.serverService.findServersByState$(statusSelect))
  }

  onPrintReport(){}
}