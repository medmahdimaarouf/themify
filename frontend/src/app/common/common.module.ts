import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';
import { ScrollbarModule } from './modules/scrollbar/scrollbar.module';
import { AccordionComponent } from './components/accordion.component/accordion.component';

@NgModule({
  declarations: [
    DropDownComponent,
    TabViewComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ScrollbarModule,
  ],
  exports: [
    DropDownComponent,
    TabViewComponent,
    AccordionComponent,
    ScrollbarModule
  ]
})
export class AppCommonModule { }
