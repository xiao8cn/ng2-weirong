import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLineComponent } from './space-line.component';

describe('SpaceLineComponent', () => {
  let component: SpaceLineComponent;
  let fixture: ComponentFixture<SpaceLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
