import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NosServicesComponent } from './component/nos-services/nos-services.component';
import { NosServicesDetailsComponent } from './component/nos-services-details/nos-services-details.component';
import { SiteVitrineComponent } from './component/site-vitrine/site-vitrine.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ajoutez cette ligne
    { path: 'nos-services', component: NosServicesComponent },
    { path: 'site-vitrine', component: SiteVitrineComponent }
// autres routes...
];
