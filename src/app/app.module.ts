import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RoutingModule } from "./routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { FormsModule } from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from './components/signup/signup.component';
import { BgDirective } from "./directives/bg.directive";
import { MyDatePipe } from "./pipes/myDate.pipe";
import { MySumPipe } from "./pipes/mySum.pipe";
import { JoinPipe } from "./pipes/join.pipe";
import { MySlicePipes } from "./pipes/mySlice.pipes";
import { MyIfDirective } from "./directives/my-if.directive";
import { MyNgClassDirective } from "./directives/my-ng-class.directive";
import { MyNgStyleDirective } from "./directives/my-ng-style.directive";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TodoEditComponent,
    TodoAddComponent,
    LoginComponent,
    SignupComponent,
    MySlicePipes,
    JoinPipe,
    MySumPipe,
    MyDatePipe,
    MyIfDirective,
    BgDirective,
    MyNgClassDirective,
    MyNgStyleDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
