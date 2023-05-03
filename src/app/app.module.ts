import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BannerComponent } from './pages/banner/banner.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BlogComponent } from './pages/blog/blog.component';
import { StatsComponent } from './pages/stats/stats.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    InformationsComponent,
    SignupComponent,
    BlogComponent,
    StatsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
