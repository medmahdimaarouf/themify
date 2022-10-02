import { Injectable } from '@angular/core';
import { CssFonts } from './fonts.data';
@Injectable({
  providedIn: 'root'
})
export class CssFontsService {

  constructor() { }

  fonts = CssFonts;
}
