import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FirstPagesComponent } from './pages/first-pages/first-pages.component';
import { SecondPagesComponent } from './pages/second-pages/second-pages.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from 'primeng/menu';
import {DropdownModule} from 'primeng/dropdown';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {PaginatorModule} from 'primeng/paginator';
import {TableModule} from 'primeng/table';

import { HighchartsChartModule } from 'highcharts-angular';
import { UsersHobbyComponent } from './pages/users-hobby/users-hobby.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstPagesComponent,
    SecondPagesComponent,
    UsersHobbyComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    DropdownModule,
    ContextMenuModule,
    MegaMenuModule,
    HighchartsChartModule,
    HttpClientModule,
    PaginatorModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
