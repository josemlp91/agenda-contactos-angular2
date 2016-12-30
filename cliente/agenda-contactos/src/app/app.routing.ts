import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactosListComponent} from "./contactos-list/contactos-list.component";
import {ContactosDetailComponent} from "./contactos-detail/contactos-detail.component";
import {ContactosCreateEditComponent} from "./contactos-create-edit/contactos-create-edit.component";
import {LoginComponent} from "./login/login.component";

import {AuthGuard} from "./logged-in.guard";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},

	//PUBLIC
	{path: "login", component: LoginComponent},

	// PRIVATES
	{path: "", component: ContactosListComponent, canActivate: [AuthGuard]},
	{path: "contacto/:id", component: ContactosDetailComponent, canActivate: [AuthGuard]},
	{path: "crear-contacto", component: ContactosCreateEditComponent, canActivate: [AuthGuard]},
	{path: "editar-contacto/:id", component: ContactosCreateEditComponent, canActivate: [AuthGuard]},
	
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);