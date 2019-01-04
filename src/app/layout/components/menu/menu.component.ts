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
  @Input() isOpen: Observable<any>;
  @Input() menus: Array<any>;
  constructor() { }

  ngOnInit() {
  }
}
