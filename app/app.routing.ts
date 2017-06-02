import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AlumnosListComponent } from "./components/alumnos-list.component";
import { AlumnoAddComponent } from "./components/alumno-add.component";
import { AlumnoEditComponent } from "./components/alumno-edit.component";

const appRoutes: Routes = [
	{
		path: "",
		redirectTo: "/",
		pathMatch: "full"
	},
	{path: "", component: AlumnosListComponent},
	{path: "crear-alumno", component: AlumnoAddComponent},
	{path: "editar-alumno/:id", component: AlumnoEditComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);