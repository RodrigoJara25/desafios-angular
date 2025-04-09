import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: false,
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  public formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      age: ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.formulario.value);
  }

  get controlName() {
    return this.formulario.get('name');
  }

  get controlEmail() {
    return this.formulario.get('email');
  }

  get controlAge() {
    return this.formulario.get('age');
  }
}
