import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { MisEventosComponent } from './pages/mis-eventos/mis-eventos.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { MisFavoritosComponent } from './pages/mis-favoritos/mis-favoritos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    
    {
        path: 'dashboard/:token',
        canActivate:[authGuard],
        component: DashboardComponent,
    },
   {
        path: '',
        canActivate:[authGuard],
        component: DashboardComponent,
    },
    {
        path: 'mis-eventos',
        canActivate:[authGuard],
        component: MisEventosComponent,
    },
    {
        path: 'mis-favoritos',
        canActivate:[authGuard],
        component: MisFavoritosComponent,
    },
    {
        path: 'mis-perfil',
        canActivate:[authGuard],
        component: MiPerfilComponent,
    }, 
];
