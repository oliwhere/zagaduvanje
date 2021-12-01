import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((x) => x.HomeModule),
  },
   {
     path: 'about',
     loadChildren: () => import('./about/about.module').then((x) => x.AboutModule)
   },
   {
     path: 'contact',
     loadChildren: () => import('./contact/contact.module').then((x) => x.ContactModule)
   },
   {
     path: 'volunteer',
     loadChildren: () => import('./volunteer/volunteer.module').then((x) => x.VolunteerModule)
   },
   {
     path: 'donate',
     loadChildren: () =>
     import('./donate/donate.module').then((x) => x.DonateModule)
   },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
