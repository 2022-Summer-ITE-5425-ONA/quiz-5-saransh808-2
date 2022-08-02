import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { PostsComponent } from './components/posts/posts.component';
import { AuthGuard } from './auth/auth.guard';
import { AddprojectComponent } from './components/addproject/addproject.component';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  {path:'addproject', component:AddprojectComponent},
  {path:'project', component:ProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
