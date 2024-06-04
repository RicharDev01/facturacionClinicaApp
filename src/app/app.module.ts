import { NgModule } from '@angular/core';

// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './primeng/primeng.module'
import { DashboardModule } from './dashboard/dashboard.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Componentes
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PrimengModule,
    // DashboardModule,
    BrowserAnimationsModule,
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
