import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArchiveComponent } from './archive/archive.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'archive',
        component: ArchiveComponent
    }  
]