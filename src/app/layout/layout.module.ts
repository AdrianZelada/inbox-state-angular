import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LayoutComponent,
    MenuComponent,
    MenuItemComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
