import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BurgerMenuToggleDirective } from './header/burger-menu-toggle.directive';
import { CardComponent } from './card/card.component';
import { SwipingPageComponent } from './swiping-page/swiping-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PhotoDataUploadComponent } from './photo-data-upload/photo-data-upload.component';
import { PhotoSearchComponent } from './photo-search/photo-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    BurgerMenuToggleDirective,
    CardComponent,
    SwipingPageComponent,
    CreateAccountComponent,
    LogInComponent,
    EditProfileComponent,
    PhotoDataUploadComponent,
    PhotoSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
