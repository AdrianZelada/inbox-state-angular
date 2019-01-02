import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PListMailsComponent } from './p-list-mails.component';

describe('PListMailsComponent', () => {
  let component: PListMailsComponent;
  let fixture: ComponentFixture<PListMailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PListMailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PListMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
