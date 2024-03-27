import { Routes } from '@angular/router';
import { ConsultantsComponent } from './consultants/consultants.component';
import { CreateConsultantComponent } from './create-consultant/create-consultant.component';

export const routes: Routes = [
    {
        path: '',
        component: ConsultantsComponent,
        title: 'Home page'
    },
    {
        path: 'createConsultant',
        component: CreateConsultantComponent,
        title: 'Create'
    }
];

// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { DetailsComponent } from './details/details.component';

// const routeConfig: Routes = [
//     {
//       path: '',
//       component: HomeComponent,
//       title: 'Home page'
//     },
//     {
//       path: 'details/:id',
//       component: DetailsComponent,
//       title: 'Home details'
//     }
//   ];
  
//   export default routeConfig;