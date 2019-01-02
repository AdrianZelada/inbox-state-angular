import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PToolbarButtonsComponent } from './p-toolbar-buttons.component';

describe('PToolbarButtonsComponent', () => {
  let component: PToolbarButtonsComponent;
  let fixture: ComponentFixture<PToolbarButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PToolbarButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PToolbarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
