import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { CredoComponent } from './components/credo/credo.component';
import { HorarioComponent } from './components/horario/horario.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'conocenos',component: ConocenosComponent},
  {path: 'credo',component: CredoComponent},
  {path: 'horario',component: HorarioComponent},
  {path: 'ubicacion',component: UbicacionComponent},
  {path: '**',component: ErrorComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);