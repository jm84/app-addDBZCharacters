import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

import { CounterModule } from './counter/components/counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { TablaComponent } from './tabla/tabla.component';

import { RegistroService } from './registro.service';

@NgModule({
  declarations: [AppComponent, TablaComponent, PopupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    CounterModule,
    HeroesModule,
    DbzModule,
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
