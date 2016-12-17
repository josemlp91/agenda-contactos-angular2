
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ContactosListComponent } from './contactos-list/contactos-list.component';
import { ContactosDetailComponent } from './contactos-detail/contactos-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContactosListComponent,
    ContactosDetailComponent
  ],
  imports:      [ BrowserModule, NgbModule.forRoot(), HttpModule, FormsModule, routing ],
  providers:    [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
