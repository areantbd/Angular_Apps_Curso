import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorCitasComponent } from './gestor-citas.component';

describe('GestorCitasComponent', () => {
  let component: GestorCitasComponent;
  let fixture: ComponentFixture<GestorCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorCitasComponent]
    });
    fixture = TestBed.createComponent(GestorCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
