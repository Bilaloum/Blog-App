import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { NewPostComponent } from './posts/new-post/new-post.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"category",component:SingleCategoryComponent},
  {path:"post",component:SinglePostComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"contact",component:ContactUsComponent},
  {path:"terms&condition",component:TermsAndConditionsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"dashboard/categories",component:CategoriesComponent},
  {path:"dashboard/posts",component:AllPostsComponent},
  {path:"dashboard/posts/new",component:NewPostComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
