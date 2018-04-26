import { Routes, RouterModule } from '@angular/router';
import {FavImageComponent} from "./fav-image/fav-image.component";;
import {SignupFormComponent} from "./forms/signup-form/signup-form.component";
import {ImageViewComponent} from "./image-view/image-view.component";
import {AuthGuard} from "./Auth/guard/auth.guard";



const appRoutes:Routes= <Routes>[
    {path: '', redirectTo:'/',pathMatch:'full'},
    {path: 'home', component: ImageViewComponent, canActivate: [AuthGuard]},
    {path:'fav_images',component: FavImageComponent, canActivate: [AuthGuard] },
    //any other link redirect to home
    { path: '**', redirectTo: '/' },
];
export const routing = RouterModule.forRoot(appRoutes);
