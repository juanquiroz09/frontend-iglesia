import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredoComponent } from './credo.component';

describe('CredoComponent', () => {
  let component: CredoComponent;
  let fixture: ComponentFixture<CredoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
