import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibComponent } from './shared-lib';

describe('SharedLib', () => {
  let component: SharedLibComponent;
  let fixture: ComponentFixture<SharedLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedLibComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
