import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCofradiasComponent } from './crear-cofradias.component';

describe('CrearCofradiasComponent', () => {
  let component: CrearCofradiasComponent;
  let fixture: ComponentFixture<CrearCofradiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCofradiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCofradiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
