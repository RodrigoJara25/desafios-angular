import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noCoderAllowed } from '../../utils/custom-validator';

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
      name: ['', [Validators.required, noCoderAllowed]],
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

  get isNameInvalid() {
    return this.controlName?.touched && this.controlName?.invalid;
  }

  get controlEmail() {
    return this.formulario.get('email');
  }

  get isEmailInvalid() {
    return this.controlEmail?.dirty && this.controlEmail?.invalid;
  }

  get controlAge() {
    return this.formulario.get('age');
  }

  get isAgeInvalid() {
    return this.controlAge?.touched && this.controlAge.invalid; 
  }
}
