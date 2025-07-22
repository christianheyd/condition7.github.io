import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OriginalsComponent } from './pages/originals/originals.component';
import { PortraitsComponent } from './pages/portraits/portraits.component';
import { StudentsComponent } from './pages/students/students.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { CommissionsComponent } from './pages/commissions/commissions.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'originals', component: OriginalsComponent },
    { path: 'portraits', component: PortraitsComponent },
    { path: 'students',  component: StudentsComponent },
    { path: 'workshops', component: WorkshopsComponent },
    { path: 'commissions', component: CommissionsComponent },
    { path: '**', redirectTo: ''}
];
