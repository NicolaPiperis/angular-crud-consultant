import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-create-consultant',
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './create-consultant.component.html',
  styleUrl: './create-consultant.component.css'
})
export class CreateConsultantComponent {
  isLoading: boolean = false;
  consultantService = inject(ConsultantService)

  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}
  async createConsultant() {

    try {
      console.log('Prima della richiesta')
      this.isLoading= true
      await new Promise(resolve => setTimeout(resolve, 3000))
      let response = await this.consultantService.createConsultant(
        {
          name: this.applyForm.value.name!,
          mail: this.applyForm.value.mail!,
          phone: this.applyForm.value.phone!,
          surname: this.applyForm.value.surname!
        }
      )
      console.log('Richiesta')
      response.subscribe((consultant) => {
        console.log(consultant)
        if (!consultant._id) {
          throw Error('Id mancante!')
        }

      }
      )
    } catch {
    }
    this.applyForm.reset()
    this.isLoading = false
    this.router.navigate(['/'])
    console.log('create funziona')
  }
}
