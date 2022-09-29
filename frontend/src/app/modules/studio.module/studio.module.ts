import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioComponent } from './studio.component/studio.component';
import { AdvancedInspectorComponent } from './advanced-inspector/advanced-inspector.component';
import { InspectorComponent } from './inspector/inspector.component';
import { SideToggleComponent } from './side-toggle/side-toggle.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StudioRoutingModule } from './studio-routing.module';
import { PapperComponent } from './papper.component/papper.component';
import { AppCommonModule } from 'src/app/common/common.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    StudioComponent,
    AdvancedInspectorComponent,
    InspectorComponent,
    SideToggleComponent,
    TopBarComponent,
    PapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudioRoutingModule
  ],
  exports: [
    StudioComponent
  ]
})
export class StudioModule { }
