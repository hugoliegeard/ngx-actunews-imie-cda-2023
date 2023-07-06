import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./core/header/header.component";
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CategoriesComponent } from './modules/pages/categories/categories.component';
import { ArticleComponent } from './modules/pages/article/article.component';
import {HttpClientModule} from "@angular/common/http";
import { Error404Component } from './modules/pages/error404/error404.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {RouterModule} from "@angular/router";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    CategoriesComponent,
    ArticleComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    InfiniteScrollModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
