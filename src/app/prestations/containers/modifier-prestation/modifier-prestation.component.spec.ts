import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPrestationComponent } from './modifier-prestation.component';

describe('ModifierPrestationComponent', () => {
  let component: ModifierPrestationComponent;
  let fixture: ComponentFixture<ModifierPrestationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPrestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
