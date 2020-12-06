import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateActorComponent } from './components/actor/create-actor/create-actor.component';
import { ActorsComponent } from './pages/actors/actors.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'main', component: MainComponent, children:
      [
        { path: '', component: HomeComponent },
        { path: 'countries', component: CountriesComponent },
        { path: 'actors', component: ActorsComponent},
        {path:'createActor',component:CreateActorComponent}
      ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
