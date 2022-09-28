import { Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { MenuComponent } from "./menu/menu.component";

const ROUTES : Routes = [
    {path : 'signup' , component : SignupComponent},
    {path : 'user-profile' , component : UserProfileComponent},
    {path : '' , component : UserProfileComponent},
    {path : 'menu' , component : MenuComponent}
];

export { ROUTES };