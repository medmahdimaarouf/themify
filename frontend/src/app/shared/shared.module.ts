import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssAnimationFormModule } from './css-animation-form.module/css-animation-form.module';
import { CssLengthFormComponent } from './css-length-form.module/css-length-form.component/css-length-form.component';
import { CssLengthFormModule } from './css-length-form.module/css-length-form.module';
import { AppCommonModule } from '../common/common.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppCommonModule,
    CssAnimationFormModule,
    CssLengthFormModule
  ],
  exports: [
    AppCommonModule,
    CssAnimationFormModule,
    CssLengthFormModule
  ]
})
export class SharedModule { }
