import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

require('file?name=i18n/[name].[ext]!../../public/i18n/zh_CN.json');
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '/i18n', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
    ],
    exports: [BrowserModule, HttpModule, TranslateModule]
})
export class AppI18nModule {
}
