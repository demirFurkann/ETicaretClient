import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DeleteDialogComponent,
    FileUploadDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule, MatButtonModule,MatFormFieldModule,MatInputModule
  ]
})
export class DialogModule { }
