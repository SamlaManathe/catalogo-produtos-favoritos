import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioFavorito } from './formulario-favorito';

describe('FormularioFavorito', () => {
  let component: FormularioFavorito;
  let fixture: ComponentFixture<FormularioFavorito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFavorito],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioFavorito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});