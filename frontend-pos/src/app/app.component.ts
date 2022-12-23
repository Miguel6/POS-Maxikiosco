import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langs: any = {  'en': 'English', 'es': 'Spanish' };
  currentLang: string = 'es';

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(Object.keys(this.langs));
    this.translateService.setDefaultLang('es');
    // this.translateService.setDefaultLang('en');
  }
}
