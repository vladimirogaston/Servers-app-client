import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private matDialogRef: MatDialogRef<LoginDialogComponent>,private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {
    this.matDialogRef.disableClose = true
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  submit(): void {
    this.auth.isActive$(this.loginForm.value)
      .subscribe(response=>{
        let isAuth = response;
        if(isAuth) {
          this.matDialogRef.close();
          this.router.navigateByUrl('/servers')
        }
      })
  }
}
