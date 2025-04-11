import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsValidationComponent } from "./exercicio8/forms-validation/forms-validation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memotecas';
}
