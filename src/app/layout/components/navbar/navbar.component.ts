import {Component, HostListener, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'z-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public stateHamburger: Observable<any> = this.sidebarService.stateSideOpen$;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sidebarService.changeForWidth(event.target.innerWidth);
  }

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  toggleHamburger() {
    this.sidebarService.toggleSidebar();
  }

}
