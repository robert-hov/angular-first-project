import {NgModule} from "@angular/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NavComponent} from "./nav.component";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavComponent
  ]
})

export class NavModule {
}
