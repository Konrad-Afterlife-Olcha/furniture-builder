import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfiguratorComponent } from './pages/configurator/configurator.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'configurator', component: ConfiguratorComponent },
];
