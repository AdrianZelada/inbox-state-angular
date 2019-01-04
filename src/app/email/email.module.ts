import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { RouterModule, Routes} from '@angular/router';
import { LayoutEmailComponent } from './layout-email/layout-email.component';

const routes: Routes = [
  {
    path: '',
    component: EmailComponent
  }
]

@NgModule({
  declarations: [EmailComponent, LayoutEmailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmailModule { }
