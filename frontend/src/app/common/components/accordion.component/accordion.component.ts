import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, Renderer2 } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit {

  @ContentChild('Header', { read: ElementRef }) header!: ElementRef;
  @ContentChild('Content', { read: ElementRef }) content!: ElementRef;
  @Input() set collapsed(value: boolean) {
    this.renderer.setStyle(this.content.nativeElement, 'display', value ? 'none' : this.display);
    console.log('display', this.display)
  }

  get collapsed(): boolean {
    return (this.content.nativeElement as HTMLElement).style.display == 'none';
  }

  private display: string = 'block';
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    this.display = ((this.content.nativeElement as HTMLDivElement).style.display.length) ? (this.content.nativeElement as HTMLDivElement).style.display : 'block';
    this.renderer.listen(this.header.nativeElement, 'click', ($event) => {
      this.toggle();
    });
  }

  collapse(): void {
    this.collapsed = true;
  }

  unCollapse(): void {
    this.collapsed = false;
  }

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

}
