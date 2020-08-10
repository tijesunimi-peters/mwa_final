import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFarmersComponent } from './browse-farmers.component';

describe('BrowseFarmersComponent', () => {
  let component: BrowseFarmersComponent;
  let fixture: ComponentFixture<BrowseFarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseFarmersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
