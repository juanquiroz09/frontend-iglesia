import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonesComponent } from './sermones.component';

describe('SermonesComponent', () => {
  let component: SermonesComponent;
  let fixture: ComponentFixture<SermonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
