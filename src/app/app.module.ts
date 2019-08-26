import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { apiKey } from './config';

@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({apiKey}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }