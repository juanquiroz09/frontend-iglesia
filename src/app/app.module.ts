import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { CredoComponent } from './components/credo/credo.component';
import { HorarioComponent } from './components/horario/horario.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ConocenosComponent,
    CredoComponent,
    HorarioComponent,
    UbicacionComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
