import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MdlModule} from "angular2-mdl";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppI18nModule} from "./app-i18n.module";
import * as components from "./components";
import "../../public/css/styles.css";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        MdlModule,
        AppI18nModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        components.MaterialTestComponent,
        components.TaskUpdateComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
