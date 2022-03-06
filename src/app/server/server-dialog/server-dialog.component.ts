import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-server-dialog',
  templateUrl: './server-dialog.component.html',
  styleUrls: ['./server-dialog.component.css']
})
export class ServerDialogComponent implements OnInit {
  serverForm!: FormGroup;
  
  constructor(private fb: FormBuilder,
              private serverService: ServerService,
              private matDialogRef: MatDialogRef<ServerDialogComponent>) {}

  ngOnInit(): void {
    this.serverForm = this.fb.group({
      ipAddress: [''],
      name: [''],
      memory: [''],
      type: [''],
      status: ['']
    })
  }

  submit(): string {
    this.serverService.save(this.serverForm.value);
    this.matDialogRef.close();
    return 'OK';
  }
}