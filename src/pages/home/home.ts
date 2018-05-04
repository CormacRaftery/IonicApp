import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { nodeValue } from '@angular/core/src/view/refs';
import {Storage} from '@ionic/storage';
import { SudokuEasyPage } from './../sudoku-easy/sudoku-easy';
import { SudokuMediumPage } from './../sudoku-medium/sudoku-medium';
import { SudokuHardPage } from './../sudoku-hard/sudoku-hard';
import { StatusPage } from './../status/status';
import { MoviesPage } from './../movies/movies';
//@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
myStatus: string;//saves name
mySearch: string;//saves name of movie
constructor(public navCtrl: NavController, public navParams: NavParams ,private storage:Storage) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  ionViewWillEnter(){//load username
    this.storage.get("myStatus")
    .then((data) =>
    {
    this.myStatus = data;
    })
    .catch((err) => {
    alert("Error accesssing Storage")
    })
    }
  updateStatus(){
    this.navCtrl.push(StatusPage);//push to change name page
    }
      
  openSudokuEasy() {
    this.navCtrl.push(SudokuEasyPage);
    }
    
  openSudokuMedium() {
    this.navCtrl.push(SudokuMediumPage);
    }

  openSudokuHard() {
    this.navCtrl.push(SudokuHardPage);
    }
    openMovies() {
      this.navCtrl.push(MoviesPage);
      }
      saveSearch(){
        this.storage.set("mySearch", this.mySearch);//save whatever was entered into storage
        this.navCtrl.push(MoviesPage);
      }
          
}//export class homepage