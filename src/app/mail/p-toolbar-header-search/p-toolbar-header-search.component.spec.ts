import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PToolbarHeaderSearchComponent } from './p-toolbar-header-search.component';

describe('PToolbarHeaderSearchComponent', () => {
  let component: PToolbarHeaderSearchComponent;
  let fixture: ComponentFixture<PToolbarHeaderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PToolbarHeaderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PToolbarHeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
