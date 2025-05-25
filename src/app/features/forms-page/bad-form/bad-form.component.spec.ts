import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadFormComponent } from './bad-form.component';

describe('BadFormComponent', () => {
  let component: BadFormComponent;
  let fixture: ComponentFixture<BadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
