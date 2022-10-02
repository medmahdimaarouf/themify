import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Inject,
} from "@angular/core";
import { shouldCall } from "@tinkoff/ng-event-plugins";

export function isActive(this: any): boolean {
  return this.verticalThumbActive || this.horizontalThumbActive;
}

export function isVerticalActive(this: any): boolean {
  return this.verticalThumbActive;
}

export function isHorizontalActive(this: any): boolean {
  return this.horizontalThumbActive;
}

@Component({
  selector: "scrollbar",
  templateUrl: "./scrollbar.template.html",
  styleUrls: ["./scrollbar.style.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollbarComponent {
  verticalThumbActive = false;

  horizontalThumbActive = false;

  private verticalThumbDragOffset = 0;

  private horizontalThumbDragOffset = 0;

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
  ) { }

  get verticalScrolled(): number {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = this.elementRef.nativeElement;

    return scrollTop / (scrollHeight - clientHeight);
  }

  get horizontalScrolled(): number {
    const {
      scrollLeft,
      scrollWidth,
      clientWidth
    } = this.elementRef.nativeElement;

    return scrollLeft / (scrollWidth - clientWidth);
  }

  get verticalPosition(): number {
    return this.verticalScrolled * (100 - this.verticalSize);
  }

  get horizontalPosition(): number {
    return this.horizontalScrolled * (100 - this.horizontalSize);
  }

  get verticalSize(): number {
    const { clientHeight, scrollHeight } = this.elementRef.nativeElement;

    return Math.ceil((clientHeight / scrollHeight) * 100);
  }

  get horizontalSize(): number {
    const { clientWidth, scrollWidth } = this.elementRef.nativeElement;

    return Math.ceil((clientWidth / scrollWidth) * 100);
  }

  get hasVerticalBar(): boolean {
    return this.verticalSize < 100;
  }

  get hasHorizontalBar(): boolean {
    return this.horizontalSize < 100;
  }

  @HostListener("scroll")
  onScroll() {
    // just to trigger change detection
  }

  @shouldCall(isActive)
  @HostListener("init.end", ["$event"])
  @HostListener("document:mouseup.silent")
  onDragEnd() {
    this.verticalThumbActive = false;
    this.horizontalThumbActive = false;
  }

  onVerticalStart({ target, clientY }: any) {
    const { top, height } = (target as HTMLElement).getBoundingClientRect();

    this.verticalThumbDragOffset = (clientY - top) / height;
    this.verticalThumbActive = true;
  }

  onHorizontalStart({ target, clientX }: any) {
    const { left, width } = (target as HTMLElement).getBoundingClientRect();

    this.horizontalThumbDragOffset = (clientX - left) / width;
    this.horizontalThumbActive = true;
  }

  @shouldCall(isVerticalActive)
  @HostListener("init.vertical", ["$event"])
  onVerticalMove({ clientY }: any, { offsetHeight }: HTMLElement) {
    const { nativeElement } = this.elementRef;
    const { top, height } = nativeElement.getBoundingClientRect();
    const maxScrollTop = nativeElement.scrollHeight - height;
    const scrolled =
      (clientY - top - offsetHeight * this.verticalThumbDragOffset) /
      (height - offsetHeight);

    nativeElement.scrollTop = maxScrollTop * scrolled;
  }

  @shouldCall(isHorizontalActive)
  @HostListener("init.horizontal", ["$event"])
  onHorizontalMove({ clientX }: any, { offsetWidth }: HTMLElement) {
    const { nativeElement } = this.elementRef;
    const { left, width } = nativeElement.getBoundingClientRect();
    const maxScrollLeft = nativeElement.scrollWidth - width;
    const scrolled =
      (clientX - left - offsetWidth * this.horizontalThumbDragOffset) /
      (width - offsetWidth);

    nativeElement.scrollLeft = maxScrollLeft * scrolled;
  }
}
