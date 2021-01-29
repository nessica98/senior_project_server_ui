import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizePageNodenewComponent } from './visualize-page-nodenew.component';

describe('VisualizePageNodenewComponent', () => {
  let component: VisualizePageNodenewComponent;
  let fixture: ComponentFixture<VisualizePageNodenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizePageNodenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizePageNodenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
