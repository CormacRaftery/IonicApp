import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteProvider} from '../../providers/remote/remote';

import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies: any[]=[];
  mySearch: string;
  constructor(private mp:RemoteProvider,public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

    ionViewWillEnter(){
      this.storage.get("mySearch")//get the variable saved as "mySearch"
      .then((data) =>
      {
        this.mySearch = data;
        console.log(data);
        this.mp.getMovies(data).subscribe(data =>
        {
          this.movies = data.Search;  
        })
      })
      .catch((err) => {
       alert("Error accesssing Storage")
      })//catch
      console.log('ionViewDidLoad MoviesPage');
     
    }//ionViewWillEnter
}//class
