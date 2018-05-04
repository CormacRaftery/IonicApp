import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuHardPage } from './sudoku-hard';

@NgModule({
  declarations: [
    SudokuHardPage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuHardPage),
  ],
})
export class SudokuHardPageModule {}
