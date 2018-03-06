import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPageDetailsComponent } from './show-page-details.component';

describe('ShowPageDetailsComponent', () => {
  let component: ShowPageDetailsComponent;
  let fixture: ComponentFixture<ShowPageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
