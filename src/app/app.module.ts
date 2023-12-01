import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { CredoComponent } from './components/credo/credo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ErrorComponent } from './components/error/error.component';
import { VisitanosComponent } from './components/visitanos/visitanos.component';
import { SermonesComponent } from './components/sermones/sermones.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ConocenosComponent,
    CredoComponent,
    InicioComponent,
    ErrorComponent,
    VisitanosComponent,
    SermonesComponent,
    FooterComponent
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
