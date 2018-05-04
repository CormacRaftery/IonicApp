import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SudokuEasyPage } from '../pages/sudoku-easy/sudoku-easy';
import { SudokuMediumPage } from '../pages/sudoku-medium/sudoku-medium';
import { SudokuHardPage } from '../pages/sudoku-hard/sudoku-hard';
import { StatusPage } from '../pages/status/status';
import { RemoteProvider } from '../providers/remote/remote';
import { MoviesPage } from '../pages/movies/movies';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SudokuEasyPage,
    SudokuMediumPage,
    SudokuHardPage,
    StatusPage,
    MoviesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SudokuEasyPage,
    SudokuMediumPage,
    SudokuHardPage,
    StatusPage,
    MoviesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteProvider
  ]
})
export class AppModule {}
