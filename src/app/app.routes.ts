import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NosServicesComponent } from './component/nos-services/nos-services.component';
import { SiteVitrineComponent } from './component/site-vitrine/site-vitrine.component';
import { ApplicationWebComponent } from './component/application-web/application-web.component';
import { ECommerceComponent } from './component/e-commerce/e-commerce.component';
import { MarketingComponent } from './component/marketing/marketing.component';
import { AProposComponent } from './component/a-propos/a-propos.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WorkSpaceComponent } from './component/work-space/work-space.component';
import { Header3Component } from './component/header3/header3.component';
import { Header2Component } from './component/header2/header2.component';

export const routes: Routes = [
    
    { path: '', redirectTo: '/home', pathMatch: 'full', data: { header: Header2Component } }, 
    { path: 'home', component: HomeComponent, data: { header: Header2Component } },// Ajoutez cette ligne
    { path: 'nos-services', component: NosServicesComponent, data: { header: Header2Component } },
    { path: 'site-vitrine', component: SiteVitrineComponent, data: { header: Header2Component } },
    { path: 'application-web', component: ApplicationWebComponent, data: { header: Header2Component } },
    { path: 'e-commerce', component: ECommerceComponent, data: { header: Header2Component } },
    { path: 'marketing', component: MarketingComponent, data: { header: Header2Component } },
    { path: 'a-propos', component: AProposComponent, data: { header: Header2Component } },
    { path: 'sign-up', component: SignUpComponent , data: { header: Header2Component }},
    { path: 'workspace', component: WorkSpaceComponent, data: { header: Header3Component } }

// autres routes...
];
