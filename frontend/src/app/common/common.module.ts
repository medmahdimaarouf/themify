import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { ScrollbarModule } from './components/scrollbar/scrollbar.module';



@NgModule({
  declarations: [
    DropDownComponent,
    TabViewComponent
  ],
  imports: [
    CommonModule,
    ScrollbarModule
  ],
  exports: [
    DropDownComponent,
    TabViewComponent,
    ScrollbarModule
  ]
})
export class AppCommonModule { }
