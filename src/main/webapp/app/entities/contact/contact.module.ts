import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BluecreekSharedModule } from '../../shared';
import {
    ContactService,
    ContactPopupService,
    ContactComponent,
    ContactDetailComponent,
    ContactDialogComponent,
    ContactPopupComponent,
    ContactDeletePopupComponent,
    ContactDeleteDialogComponent,
    contactRoute,
    contactPopupRoute,
} from './';

const ENTITY_STATES = [
    ...contactRoute,
    ...contactPopupRoute,
];

@NgModule({
    imports: [
        BluecreekSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ContactComponent,
        ContactDetailComponent,
        ContactDialogComponent,
        ContactDeleteDialogComponent,
        ContactPopupComponent,
        ContactDeletePopupComponent,
    ],
    entryComponents: [
        ContactComponent,
        ContactDialogComponent,
        ContactPopupComponent,
        ContactDeleteDialogComponent,
        ContactDeletePopupComponent,
    ],
    providers: [
        ContactService,
        ContactPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BluecreekContactModule {}
