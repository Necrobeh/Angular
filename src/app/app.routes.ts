import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { ArticleViewComponent } from "./article-view/article-view.component";

const ROUTES : Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'contact', component : ContactComponent},
    {path :'', component : UserProfileComponent},
    {path : 'article/:id', component : ArticleViewComponent}
];

export { ROUTES };