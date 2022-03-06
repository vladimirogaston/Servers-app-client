import { Injectable } from '@angular/core';
import { Subject, Observable, of, filter } from 'rxjs';
import { Server } from './server-model';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private servers: Server[];
  private servers$: Subject<Server[]>;

  constructor() {
    this.servers = [];
    this.servers$= new Subject();
  }

  findServers$(): Observable<Server[]> {
    return this.servers$.asObservable();
  }

  findServersByState$(state: string): Observable<Server[]>{
    let aux: Server[] = []
    if(state == 'UP') {
      aux = aux.concat(this.servers.filter(serv => serv.status == Status.SERVER_UP))
    } else if(state == "DOWN") {
      aux = aux.concat(this.servers.filter(serv => serv.status == Status.SERVER_DOWN))
    } else {
      aux = aux.concat(this.servers)
    }
    return of(aux);
  }

  findUpServers$(): Observable<Server[]>{
    let aux = this.servers.filter(serv => serv.status == Status.SERVER_UP);
    return of(aux);
  }

  findDownServers$(): Observable<Server[]>{
    let aux = this.servers.filter(serv => serv.status == Status.SERVER_DOWN);
    return of(aux);
  }

  save(server: any): void {
    let serv: Server = {...server};
    serv.status = server.status == 'UP' ? Status.SERVER_UP : Status.SERVER_DOWN;
    this.servers.push(serv);
    this.servers$.next(this.servers);
  }

  delete(serverIP: string): void {
    let aux = this.servers.filter(server => server.ipAddress != serverIP);
    this.servers = aux;
    this.servers$.next(this.servers);
  }
}