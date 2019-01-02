import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelMailComponent } from './panel-mail.component';

describe('PanelMailComponent', () => {
  let component: PanelMailComponent;
  let fixture: ComponentFixture<PanelMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
