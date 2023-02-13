import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCofradiasComponent } from './listar-cofradias.component';

describe('ListarCofradiasComponent', () => {
  let component: ListarCofradiasComponent;
  let fixture: ComponentFixture<ListarCofradiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCofradiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCofradiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
