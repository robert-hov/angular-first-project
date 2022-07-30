import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DemoAComponent} from "./demo-a/demo-a.component";
import {DemoBComponent} from "./demo-b/demo-b.component";

const routes:Routes = [
  {path: 'a', component:DemoAComponent},
  {path: 'b', component:DemoBComponent},
  {path: '**', redirectTo: 'a'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
