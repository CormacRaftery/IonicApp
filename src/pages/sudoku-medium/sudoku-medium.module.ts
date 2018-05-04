import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SudokuMediumPage } from './sudoku-medium';

@NgModule({
  declarations: [
    SudokuMediumPage,
  ],
  imports: [
    IonicPageModule.forChild(SudokuMediumPage),
  ],
})
export class SudokuMediumPageModule {}
