import { Component, OnInit } from '@angular/core';
import { CssFontsService } from 'src/app/common/services/css-fonts.service/css-fonts.service';


@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {
  fonts: { system: Array<string> } = { system: [] }
  constructor(private cssFontsService: CssFontsService) { }

  ngOnInit(): void {
    this.fonts = this.cssFontsService.fonts;
  }

}
