import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-validation.component.html',
  styleUrl: './forms-validation.component.css'
})
export class FormsValidationComponent {

nome = new FormControl('',[Validators.required, Validators.minLength(3)]);

email =  new FormControl('',[Validators.required, Validators.email]);

telefone = new FormControl('',[Validators.required,Validators.pattern(/^\d{10,11}$/)])



}
