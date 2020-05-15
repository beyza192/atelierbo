import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramfeedComponent } from './instagramfeed.component';

describe('InstagramfeedComponent', () => {
  let component: InstagramfeedComponent;
  let fixture: ComponentFixture<InstagramfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
