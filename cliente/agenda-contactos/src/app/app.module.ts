
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MaterializeModule } from "angular2-materialize";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactosListComponent } from './contactos-list/contactos-list.component';
import { ContactosDetailComponent } from './contactos-detail/contactos-detail.component';
import { ContactosCreateEditComponent } from './contactos-create-edit/contactos-create-edit.component';

import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./logged-in.guard";
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactosListComponent,
    ContactosDetailComponent,
    ContactosCreateEditComponent,
    LoginComponent
  ],
  imports:      [ BrowserModule,
                  MaterializeModule,
                  HttpModule,
                  FormsModule,
                  routing,
                  ],
                  
  providers:    [ appRoutingProviders, UserService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
