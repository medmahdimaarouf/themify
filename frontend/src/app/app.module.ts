import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvancedInspectorComponent } from './advanced-inspector/advanced-inspector.component';
import { InspectorComponent } from './inspector/inspector.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { SideToggleComponent } from './side-toggle/side-toggle.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvancedInspectorComponent,
    InspectorComponent,
    SideNavigationComponent,
    SideToggleComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
