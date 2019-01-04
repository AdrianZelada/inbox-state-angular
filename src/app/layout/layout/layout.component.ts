import {Component, HostListener, OnInit} from '@angular/core';
import { Menus} from '../services/navigation.menus';
import {Observable} from 'rxjs';
import {SidebarService} from '../services/sidebar.service';

@Component({
  selector: 'z-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menus = Menus;
  public stateSide: Observable<any> = this.sidebarService.stateSideOpen$;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
