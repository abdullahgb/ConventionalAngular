import { NgModule } from '@angular/core';

import { AssetsPipe } from '../../core/pipes/assets.pipe';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatDialogModule,
  MatTooltipModule,
  MatInputModule,
  MatSnackBarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatCardModule,
  MatDividerModule,
  MatChipsModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatCheckboxModule,
  MatMenuModule,
  MatRadioModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipeModule } from './assets.module';
import { StopPropagateDirective } from 'src/app/core/directives/stop-propagate.directive';
import { ConfirmActionDialogComponent } from '../components/confirm-action-dialog/confirm-action-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    FlexModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    ScrollingModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatRadioModule
  ],
  declarations: [StopPropagateDirective, ConfirmActionDialogComponent],
  providers: [],
  entryComponents: [ConfirmActionDialogComponent],
  exports: [
    CommonModule,
    PipeModule,

    // components
    ConfirmActionDialogComponent,

    // Modules
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    FlexModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    ScrollingModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatRadioModule,

    // pipes
    AssetsPipe,

    // directives
    StopPropagateDirective
  ]
})
export class SharedModules {}
