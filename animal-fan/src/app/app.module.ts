import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage.component';
import { GalleryComponent } from './gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
  {
    path: "",
    redirectTo: "/homepage",
    pathMatch: "full"
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
