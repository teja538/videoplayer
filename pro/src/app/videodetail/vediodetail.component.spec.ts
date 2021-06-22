import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VediodetailComponent } from './vediodetail.component';

describe('VediodetailComponent', () => {
  let component: VediodetailComponent;
  let fixture: ComponentFixture<VediodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VediodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VediodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
