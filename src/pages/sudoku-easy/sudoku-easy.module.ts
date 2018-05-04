import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuEasyPage } from './sudoku-easy';

@NgModule({
  declarations: [
    SudokuEasyPage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuEasyPage),
  ],
})
export class SudokuEasyPageModule {}
