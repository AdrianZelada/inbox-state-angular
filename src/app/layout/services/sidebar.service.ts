import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private minWidthWindow: any = 850;
  private activateHover: boolean = false;
  private stateSideOpen: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public stateSideOpen$: Observable<any> = this.stateSideOpen.asObservable();
  constructor() {
    this.changeForWidth(window.innerWidth);
  }

  toggleSidebar() {
    const state = !this.stateSideOpen.getValue();
    this.stateSideOpen.next(state);
    const body: Element = document.getElementsByTagName('body')[0];
    body.classList.toggle('sidebar-hide');
  }

  changeForWidth(width: any) {
    if ((width <= this.minWidthWindow) && !this.stateSideOpen.getValue()) {
      this.toggleSidebar();
    }
  }

  overSidebar(target: any) {
    if (this.activateHover) {
      this.stateSideOpen.next(false);
      const body: Element = document.getElementsByTagName('body')[0];
      body.classList.remove('sidebar-hide');
    }
  }

  outSidebar(target: Element) {
    if (this.activateHover) {
      let sw: boolean = false;
      const keys = ['nano-content', '_menu'];
      keys.forEach((key) => {
        sw = sw || target.classList.contains(key);
      });
      if (!sw) {
        this.stateSideOpen.next(true);
        const body: Element = document.getElementsByTagName('body')[0];
        body.classList.add('sidebar-hide');
      }
    }
  }
}
