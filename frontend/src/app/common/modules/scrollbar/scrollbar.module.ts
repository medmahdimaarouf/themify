import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResizeObserverModule } from "@ng-web-apis/resize-observer";
import { ScrollbarComponent } from "./scrollbar.component";

@NgModule({
  imports: [
    CommonModule,
    ResizeObserverModule
  ],
  declarations: [ScrollbarComponent],
  exports: [ScrollbarComponent]
})
export class ScrollbarModule { }
