import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent }  from "./app.component";
import { routing, appRoutingProviders } from "./app.routing";

import { AlumnosListComponent } from "./components/alumnos-list.component";
import { AlumnoAddComponent } from "./components/alumno-add.component";
import { AlumnoEditComponent } from "./components/alumno-edit.component";
 
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, routing ],
  declarations: [ 
  				  AppComponent,
  				  AlumnosListComponent,
  				  AlumnoAddComponent,
  				  AlumnoEditComponent
  				],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }