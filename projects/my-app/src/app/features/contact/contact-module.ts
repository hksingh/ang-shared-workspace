import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Support } from './support/support';
import { Contact } from './contact/contact';
import { Locations } from './locations/locations';

export const contactRoutes: Routes = [
    {
        path: '',
        component: Contact
    },
    {
        path: 'support',
        component: Support
    },
    {
        path: 'locations',
        component: Locations
    }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(contactRoutes)],
})
export class ContactModule {}
