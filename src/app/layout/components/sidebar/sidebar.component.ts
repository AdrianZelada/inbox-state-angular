import { Component, OnInit } from '@angular/core';
import { SidebarService} from '../../services/sidebar.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'z-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public stateSidebar: Observable<any> = this.sidebarService.stateSideOpen$;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
  }

  over(e) {
    this.sidebarService.overSidebar(e.relatedTarget);
  }

  out(e) {
    this.sidebarService.outSidebar(e.relatedTarget);
  }

}
