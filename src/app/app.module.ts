import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { ListCountriesComponent } from './components/country/list-countries/list-countries.component';
import { MainComponent } from './pages/main/main.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { ListActorsComponent } from './components/actor/list-actors/list-actors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateActorComponent } from './components/actor/create-actor/create-actor.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { ListMoviesComponent } from './components/movie/list-movies/list-movies.component';
import { CreateMovieComponent } from './components/movie/create-movie/create-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CountriesComponent,
    ListCountriesComponent,
    MainComponent,
    ActorsComponent,
    ListActorsComponent,
    CreateActorComponent,
    ListMoviesComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
