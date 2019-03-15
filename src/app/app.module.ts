import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';


import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DatePipe } from '@angular/common';
import { PostsComponent } from './user/posts/posts.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { OutputComponent } from './user/output/output.component';


const routes: Routes = [
  {
    path: '', // default
    redirectTo: 'user',
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'',
        redirectTo:'posts',
        pathMatch:'full'
      },
      {
        path:'posts',
        component:PostsComponent
      },
      {
        path:'favorite',
        component:FavoriteComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'output',
        component:OutputComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostsComponent,
    ProfileComponent,
    FavoriteComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
