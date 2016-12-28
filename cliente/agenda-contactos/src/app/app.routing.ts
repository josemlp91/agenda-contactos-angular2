import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactosListComponent} from "./contactos-list/contactos-list.component";
import {ContactosDetailComponent} from "./contactos-detail/contactos-detail.component";
import {ContactosCreateEditComponent} from "./contactos-create-edit/contactos-create-edit.component";


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{path: "", component: ContactosListComponent},
	{path: "contacto/:id", component: ContactosDetailComponent},
	{path: "crear-contacto", component: ContactosCreateEditComponent},
	{path: "editar-contacto/:id", component: ContactosCreateEditComponent},
	
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);