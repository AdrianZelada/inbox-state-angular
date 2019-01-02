import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SProfileToolbarComponent } from './s-profile-toolbar.component';

describe('SProfileToolbarComponent', () => {
  let component: SProfileToolbarComponent;
  let fixture: ComponentFixture<SProfileToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SProfileToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SProfileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
