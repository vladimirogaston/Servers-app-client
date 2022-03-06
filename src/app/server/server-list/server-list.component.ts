import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Server } from '../shared/server-model';
import { ServerService } from '../shared/server.service';
import { Status } from '../shared/status';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerListComponent implements OnInit, OnChanges {
  @Input('dataSource')
  dataSource: Server[];
  
  @Input('deleteableItems')
  deleteable!: boolean;
  displayedColumns: string[];
  
  constructor(private serverService: ServerService) {
    this.dataSource = [];
    this.displayedColumns = ['Ip Address', 'Name', 'Memory', 'Type', 'Status', 'Ping', 'Action'];
    this.deleteable = false;
  }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = changes['dataSource'].currentValue
  }

  getServerStatusMessage(status: number): string {
    let ret = 'SERVER UP';
    if(status == 0) {
      ret = 'SERVER DOWN';
    }
    return ret;
  }

  getServerStatusStyle(status: number): string {
    let ret = 'server-up';
    if(status == 0) {
      ret = 'server-down';
    }
    return ret;
  }

  getPingIconName(status: Status): string {
    let ret = '';
    if(status == Status.SERVER_UP) {
      ret =  'signal_cellular_alt';
    } else {
      ret = 'signal_cellular_connected_no_internet_4_bar';
    }
    return ret;
  }

  onDelete(ipAddress: string): void {
    this.serverService.delete(ipAddress);
    console.log(ipAddress);
  }
}