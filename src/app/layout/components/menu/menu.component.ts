import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'z-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class MenuComponent implements OnInit {

  @HostBinding('class')
  classes = 'nano-content';
  menus = menus;
  @Input() isOpen: Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
const menus = [
  {
    type: 'title',
    label: 'Main'
  },
  {
    type: 'group',
    label: 'Dashboard',
    icon: 'ti-home',
    children: [
      {
        type: 'link',
        label: 'Dashboard 1',
      },
      {
        type: 'link',
        label: 'Dashboard 2',
        icon: 'ti-home',
      }
    ]
  },
  {
    type: 'link',
    label: 'Calender',
    icon: 'ti-calendar'
  },

]
