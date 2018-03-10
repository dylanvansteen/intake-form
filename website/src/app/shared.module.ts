import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCard,
  MatCardModule,
  MatInputModule,
  MatFormField,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

const modules = [
  FlexLayoutModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [modules],
  exports: [modules]
})
export class SharedModule {}
