import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from '../app/registration/registration.component';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { MainComponent } from './main/main.component';
import { SocketService } from './socket.service';
const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    {path: 'main', component: MainComponent},
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, RegistrationComponent, LoginComponent, MainComponent],
    providers:    [SocketService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }