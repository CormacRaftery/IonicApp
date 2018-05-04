import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { nodeValue } from '@angular/core/src/view/refs';
import {Storage} from '@ionic/storage';

//@IonicPage()
@Component({
  selector: 'page-sudoku-easy',
  templateUrl: 'sudoku-easy.html',
})
export class SudokuEasyPage {
    constructor(public navCtrl: NavController,public navParams: NavParams) {
  }
      answerFunction() {
          var i,j;
          var answer:number[][] = [[3,9,1,6,2,4,5,7,8],[4,5,6,8,7,1,3,9,2],[2,8,7,5,3,9,6,1,4],
          [1,7,3,2,8,6,9,4,5],[5,6,2,4,9,7,1,8,3],[8,4,9,3,1,5,2,6,7],[7,2,4,1,6,3,8,5,9],
        [6,3,5,9,4,8,7,2,1],[9,1,8,7,5,2,4,3,6]];
        
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
