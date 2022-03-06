import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.css']
})
export class StatusSelectComponent implements OnInit {

  statusList: string [] = ['ALL', 'UP', 'DOWN'];
  selected: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getSelected() {
    return this.selected;
  }
}
