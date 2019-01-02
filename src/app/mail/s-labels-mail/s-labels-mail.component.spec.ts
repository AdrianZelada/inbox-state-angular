import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SLabelsMailComponent } from './s-labels-mail.component';

describe('SLabelsMailComponent', () => {
  let component: SLabelsMailComponent;
  let fixture: ComponentFixture<SLabelsMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SLabelsMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SLabelsMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
