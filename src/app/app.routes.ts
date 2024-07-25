import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadChildren:()=>import('./pages/home/home.routes')
    },
    {
        path:"services",
        loadChildren:()=>import('./pages/services/services.routes')
    },
    {
        path:"contact",
        loadChildren:()=>import('./pages/contact/contact.routes')
    },
    {
        path:"**",
        loadComponent:()=>import('./pages/not-found/not-found.component').then((m)=> m.NotFoundComponent)
    }
];
