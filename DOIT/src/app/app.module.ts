import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { Nav } from "./nav/nav.component";
import { HomeComponent } from './home/home.component';
import { CheckListComponent } from './check-list/check-list.component';
import { TodoService } from './service/todo.service';
import { ArchiveComponent } from './archive/archive.component';
import { routes } from './app.routes';
import { ArchiveCardComponent } from './archive-card/archive-card.component';

@NgModule({
  declarations: [
    AppComponent,Nav, HomeComponent, CheckListComponent, ArchiveComponent, ArchiveCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule 
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
