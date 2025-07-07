import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OriginalsComponent } from './pages/originals/originals.component';
import { PortraitsComponent } from './pages/portraits/portraits.component';
import { StudentsComponent } from './pages/students/students.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'originals', component: OriginalsComponent },
    { path: 'portraits', component: PortraitsComponent },
    { path: 'students',  component: StudentsComponent },
    { path: '**', redirectTo: ''}
];
