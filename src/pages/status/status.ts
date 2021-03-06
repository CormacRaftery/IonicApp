import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
@IonicPage()
@Component({
selector: 'page-status',
templateUrl: 'status.html',
})
export class StatusPage {
myStatus: string;
constructor(public navCtrl: NavController, private storage:Storage, public navParams: NavParams) {
}
saveStatus(){
this.storage.set("myStatus", this.myStatus);
this.navCtrl.pop();
}
ionViewDidLoad() {
console.log('ionViewDidLoad StatusPage');
}
ionViewWillEnter(){
this.storage.get("myStatus")
.then((data) =>
{
this.myStatus = data;
})
.catch((err) => {
alert("Error accesssing Storage")
})
}
}
