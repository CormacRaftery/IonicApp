import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SudokuHardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sudoku-hard',
  templateUrl: 'sudoku-hard.html',
})
export class SudokuHardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  answerFunction() {
    var i,j;
    var answer:number[][] = [[3,5,2,1,6,7,9,8,4],[8,4,6,2,5,9,3,7,1],[7,1,9,8,4,3,5,2,6],
    [5,3,4,6,2,8,7,1,9],[1,9,8,3,7,4,6,5,2],[6,2,7,9,1,5,4,3,8],[9,8,5,4,3,2,1,6,7],
  [4,6,3,7,8,1,2,9,5],[2,7,1,5,9,6,8,4,3]];
  
  for(i=0;i<9;i++)
  {
    for(j=0;j<9;j++)
    {
      var element = <HTMLInputElement> document.getElementById(i+","+j);
      console.log(element.valueAsNumber);
      if(element.valueAsNumber==answer[i][j])
      {
        element.style.backgroundColor='green';
      }
      else
      {
        element.style.backgroundColor='red';
      }
    }
  }
}

}
