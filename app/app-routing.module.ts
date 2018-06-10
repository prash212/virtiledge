import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-details/:id', component: CourseDetailComponent },
  { path: 'success', component: SuccessComponent },
  { path:'events', component: EventsComponent },
  { path: "**", component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
