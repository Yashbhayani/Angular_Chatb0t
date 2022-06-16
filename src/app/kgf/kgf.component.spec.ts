import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KGFComponent } from './kgf.component';

describe('KGFComponent', () => {
  let component: KGFComponent;
  let fixture: ComponentFixture<KGFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KGFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KGFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
