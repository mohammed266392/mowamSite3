import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NosServicesComponent } from './component/nos-services/nos-services.component';
import { SiteVitrineComponent } from './component/site-vitrine/site-vitrine.component';
import { ApplicationWebComponent } from './component/application-web/application-web.component';
import { ECommerceComponent } from './component/e-commerce/e-commerce.component';
import { MarketingComponent } from './component/marketing/marketing.component';
import { AProposComponent } from './component/a-propos/a-propos.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

export const routes: Routes = [
    
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },// Ajoutez cette ligne
    { path: 'nos-services', component: NosServicesComponent },
    { path: 'site-vitrine', component: SiteVitrineComponent },
    { path: 'application-web', component: ApplicationWebComponent },
    { path: 'e-commerce', component: ECommerceComponent },
    { path: 'marketing', component: MarketingComponent },
    { path: 'a-propos', component: AProposComponent },
    { path: 'sign-up', component: SignUpComponent }

// autres routes...
];
