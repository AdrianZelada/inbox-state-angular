import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SStatesMailComponent } from './s-states-mail.component';

describe('SStatesMailComponent', () => {
  let component: SStatesMailComponent;
  let fixture: ComponentFixture<SStatesMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SStatesMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SStatesMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
