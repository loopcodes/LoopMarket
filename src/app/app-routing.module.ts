import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { ClassComponent } from './class/class.component';
import { HomeComponent } from './home/home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'class', component: ClassComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', component: AuthModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }