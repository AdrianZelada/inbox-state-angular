import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEmailComponent } from './layout-email.component';

describe('LayoutEmailComponent', () => {
  let component: LayoutEmailComponent;
  let fixture: ComponentFixture<LayoutEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
