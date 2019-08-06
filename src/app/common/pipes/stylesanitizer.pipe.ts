import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'stylesanitize'
})
export class StyleSanitizerPipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) { }

  transform(value: any): any {
    const cleanSTYLE = this.sanitize.bypassSecurityTrustStyle(value);
    return cleanSTYLE;
  }

}
