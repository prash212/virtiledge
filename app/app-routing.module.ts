import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { EventsComponent } from './events/events.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { ReschedulePolicyComponent } from './reschedule-policy/reschedule-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BecomeTrainerComponent } from './become-trainer/become-trainer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyComponent } from './verify/verify.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ErrorComponent } from './error/error.component';
import { EnrollComponent } from './enroll/enroll.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:"full" },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-details/:id', component: CourseDetailComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'events', component: EventsComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'reschedule-policy', component: ReschedulePolicyComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'become-trainer', component: BecomeTrainerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'corporate-training', component: CorporateTrainingComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify', component: VerifyComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'enroll', component: EnrollComponent },
  { path: "**", component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
