import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SudokuMediumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sudoku-medium',
  templateUrl: 'sudoku-medium.html',
})
export class SudokuMediumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  answerFunction() {
    var i,j;
    var answer:number[][] = [[6,5,9,3,7,8,4,1,2],[4,8,3,1,2,5,7,6,9],[2,1,7,9,4,6,5,8,3],
    [5,4,2,8,3,1,9,7,6],[7,3,8,6,9,4,2,5,1],[9,6,1,2,5,7,3,4,8],[3,7,6,5,1,9,8,2,4],
  [1,9,5,4,8,2,6,3,7],[8,2,4,7,6,3,1,9,5]];
  
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
