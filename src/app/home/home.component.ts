import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../shared/login-dialog/login-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isAuthUser!: boolean;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.isAuthUser = false;
  }

  ngAfterViewInit(): void {
      this.matDialog.open(LoginDialogComponent, {
        width: '250px'
      })
  }
}
