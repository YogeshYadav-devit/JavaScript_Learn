import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternListComponent } from './Intern/intern-list/intern-list.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { InterGetComponent } from './inter-get/inter-get.component';
import{InternModule} from './Intern/intern.module'

@NgModule({
  declarations: [
    AppComponent,
    InternListComponent,
    ToDoListComponent,
    ChildComponent,
    ParentComponent,
    InterGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InternModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
