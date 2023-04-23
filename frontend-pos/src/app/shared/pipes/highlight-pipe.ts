import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'highlight'})
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    const pattern = search?.normalize('NFC')
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      .split(' ')
      .filter(t => t.length > 0)
      .join('|');
    console.log(pattern);
    const regex = new RegExp(pattern, 'gi');

    return search ? text.normalize('NFC').replace(regex, match => `<span class="highlighted-coincident-text-mat-option">${match}</span>`) : text;
  }
}
