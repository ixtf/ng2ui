import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as components from './components';
const routes: Routes = [
    {path: '', redirectTo: '/task', pathMatch: 'full'},
    {path: 'task', component: components.TaskUpdateComponent},
    {path: 'material', component: components.MaterialTestComponent},
    // { path: 'detail/:id', component: HeroDetailComponent },
    // { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
