import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-favorito',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-favorito.html',
  styleUrl: './formulario-favorito.css',
})
export class FormularioFavorito {
  @Output() observacaoSalva = new EventEmitter<string>();

  formulario = new FormBuilder().group({
    motivo: ['', [Validators.required, Validators.minLength(5)]],
  });

  salvar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const motivo = this.formulario.value.motivo!;
    this.observacaoSalva.emit(motivo);

    this.formulario.reset();
  }

  get motivo() {
    return this.formulario.controls.motivo;
  }
}