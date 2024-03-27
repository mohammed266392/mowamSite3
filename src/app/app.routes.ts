import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NosServicesComponent } from './component/nos-services/nos-services.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ajoutez cette ligne
    { path: 'nos-services', component: NosServicesComponent },
// autres routes...
];
