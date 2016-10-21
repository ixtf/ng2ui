import {Component, ViewContainerRef} from "@angular/core";
import {TranslateService} from "ng2-translate/ng2-translate";
import {MdlDialogOutletService} from "angular2-mdl";
import {AppConfig} from "./app.config";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    navs = [
        {routerLink: '/task', title: 'Task'},
        {routerLink: '/material', title: 'Material'},
    ];

    constructor(translate: TranslateService,
                dilalogOuletService: MdlDialogOutletService,
                viewConatinerRef: ViewContainerRef) {
        translate.setDefaultLang(AppConfig.DEFAULT_LANG.code);
        translate.use(AppConfig.DEFAULT_LANG.code);

        dilalogOuletService.setDefaultViewContainerRef(viewConatinerRef);
    }
}
