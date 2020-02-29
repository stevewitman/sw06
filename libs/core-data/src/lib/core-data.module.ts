import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@bb/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class CoreDataModule {}
