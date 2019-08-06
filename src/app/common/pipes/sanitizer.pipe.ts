import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private sanitize: DomSanitizer) { }

  transform(value: any): any {
    const cleanURL = this.sanitize.bypassSecurityTrustResourceUrl(value);
    return cleanURL;
  }

}
