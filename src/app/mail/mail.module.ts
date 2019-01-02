import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelMailComponent } from './panel-mail/panel-mail.component';
import { SProfileToolbarComponent } from './s-profile-toolbar/s-profile-toolbar.component';
import { SStatesMailComponent } from './s-states-mail/s-states-mail.component';
import { SLabelsMailComponent } from './s-labels-mail/s-labels-mail.component';
import { PToolbarButtonsComponent } from './p-toolbar-buttons/p-toolbar-buttons.component';
import { PToolbarHeaderSearchComponent } from './p-toolbar-header-search/p-toolbar-header-search.component';
import { PListMailsComponent } from './p-list-mails/p-list-mails.component';

import { RouterModule, Route} from '@angular/router';
import {MatButtonModule, MatGridListModule} from '@angular/material';

const router: Array<Route> = [
  {
    path: '',
    component: MailComponent
  }
];

@NgModule({
  declarations: [MailComponent, SidebarComponent,
    PanelMailComponent, SProfileToolbarComponent,
    SStatesMailComponent, SLabelsMailComponent,
    PToolbarButtonsComponent, PToolbarHeaderSearchComponent,
    PListMailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MatGridListModule,
    MatButtonModule
  ]
})
export class MailModule { }
