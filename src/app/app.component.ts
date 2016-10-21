import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { AppConfig } from './app.config';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(translate: TranslateService) {
        translate.setDefaultLang(AppConfig.DEFAULT_LANG.code);
        translate.use(AppConfig.DEFAULT_LANG.code);
    }
}
