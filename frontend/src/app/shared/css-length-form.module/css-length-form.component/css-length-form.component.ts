import { Component, Input, OnInit } from '@angular/core';

enum EEDIT_MODE {
  EXACT_VALUE,
  SUGGESTED_VALUE
}
interface ILengthInputData {
  units: Array<string>,
  min?: number,
  max?: number
}
interface ICssLenghtValue {
  value: number,
  unit: string
}
@Component({
  selector: 'app-css-length-form',
  templateUrl: './css-length-form.component.html',
  styleUrls: ['./css-length-form.component.scss']
})
export class CssLengthFormComponent implements OnInit {

  @Input() options: Array<string> = new Array();
  @Input() value: ICssLenghtValue = { unit: 'px', value: 0 }
  cssLengthUnits = ['px', 'em', 'vw', 'vh', 'Second'];
  editMode: EEDIT_MODE = EEDIT_MODE.EXACT_VALUE;
  option: string = '';
  constructor() { }

  ngOnInit(): void {
    this.options = ['unherit', 'initial', 'unset']
  }

  _optionModalToggled = false;

}
