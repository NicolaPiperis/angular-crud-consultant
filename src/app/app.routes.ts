import { Routes } from '@angular/router';
import { ConsultantsComponent } from './consultants/consultants.component';
import { CreateConsultantComponent } from './create-consultant/create-consultant.component';
import { UpdateConsultantComponent } from './update-consultant/update-consultant.component';

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
    },
    {
        path: 'updateConsultant/:_id',
        component: UpdateConsultantComponent,
        title: 'Update'
    }
];
