import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { CredoComponent } from './components/credo/credo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from "./components/error/error.component";
import { VisitanosComponent } from "./components/visitanos/visitanos.component";
import { SermonesComponent } from "./components/sermones/sermones.component";

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'conocenos',component: ConocenosComponent},
  {path: 'credo',component: CredoComponent},
  {path: 'sermones',component: SermonesComponent},
  {path: 'visitanos',component: VisitanosComponent},
  {path: '**',component: ErrorComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);