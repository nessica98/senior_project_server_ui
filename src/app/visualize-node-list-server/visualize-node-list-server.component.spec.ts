import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeNodeListServerComponent } from './visualize-node-list-server.component';

describe('VisualizeNodeListServerComponent', () => {
  let component: VisualizeNodeListServerComponent;
  let fixture: ComponentFixture<VisualizeNodeListServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeNodeListServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeNodeListServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
