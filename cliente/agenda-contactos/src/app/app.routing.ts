import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactosListComponent} from "./contactos-list/contactos-list.component";
import {ContactosDetailComponent} from "./contactos-detail/contactos-detail.component";


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{path: "", component: ContactosListComponent},
	{path: "contacto/:id", component: ContactosDetailComponent},
	
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);