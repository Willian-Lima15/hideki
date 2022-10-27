import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { SigupComponent } from "./sigup/sigup.component";

@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    SigupComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class HomeModule {}
