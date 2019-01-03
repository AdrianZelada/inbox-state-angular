import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'z-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent implements OnInit, AfterViewInit {

  @Input() item: any;
  @Input() isOpen: Observable<any> = new Observable<any>();

  state: Observable<any>;
  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = this.isOpen.pipe(
        tap((value) => {
          console.log(value)
          if (value) {
            this.item.open = false;
          }
        })
      );
    }, 1);

  }

  open(item: any) {
    item.open = !!!item.open;
  }

}
