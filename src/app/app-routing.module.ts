import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"singleCategory",component:SingleCategoryComponent},
  {path:"singlePost",component:SinglePostComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"contact",component:ContactUsComponent},
  {path:"terms&condition",component:TermsAndConditionsComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
