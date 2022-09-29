import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() value: string = 'px';
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @Input() options: Array<string> = new Array();
  constructor() { }

  ngOnInit(): void {

  }

  options_toggled: boolean = false;

  onValueChange(value: string): void {
    this.options_toggled = false;
    this.value = value;
    this.valueChange.emit(value);
  }
}
