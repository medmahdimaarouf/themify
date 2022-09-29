import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssLengthFormComponent } from './css-length-form.component/css-length-form.component';
import { AppCommonModule } from 'src/app/common/common.module';



@NgModule({
  declarations: [
    CssLengthFormComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [
    CssLengthFormComponent
  ]
})
export class CssLengthFormModule { }
