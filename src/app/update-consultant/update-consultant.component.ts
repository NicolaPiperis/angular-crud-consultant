import { Component, inject, OnInit} from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ConsultantService } from '../consultant.service';
import { Consultant } from '../interface/consultant';

@Component({
  selector: 'app-update-consultant',
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './update-consultant.component.html',
  styleUrl: './update-consultant.component.css'
})
export class UpdateConsultantComponent implements OnInit {
  isLoading: boolean = false;
  consultantService = inject(ConsultantService)

  constructor(private router: Router, private routeId: ActivatedRoute) { }

  applyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.loadData(this.routeId.snapshot.paramMap.get('_id'))
  }

  async loadData(constultantId: string | null) {
    try {
      this.isLoading = true
      await new Promise(resolve => setTimeout(resolve, 1500))
      await this.consultantService.getConsultantById(constultantId).subscribe((data) => {

        this.applyForm.setValue({
          mail: data.mail,
          name: data.name,
          phone: data.phone,
          surname: data.surname
        })
      })
      this.isLoading = false
    } catch { }
  }
  async updateData() {
    try {
      console.log('Prima della richiesta')
      this.isLoading= true
      await new Promise(resolve => setTimeout(resolve, 3000))
      const consultantData = {
          name: this.applyForm.value.name!,
          mail: this.applyForm.value.mail!,
          phone: this.applyForm.value.phone!,
          surname: this.applyForm.value.surname!
      }
      const consultantId = this.routeId.snapshot.paramMap.get('_id')
      let response = await this.consultantService.putConsultant(
        consultantId,
        consultantData
      )
      console.log('Richiesta')
      response.subscribe((updatedConsultant) => {
        console.log(updatedConsultant._id)
        if (!updatedConsultant._id) {
          throw Error('Id mancante!')
        }

      }
      )
    } catch {
    }
    this.applyForm.reset()
    this.isLoading = false
    this.router.navigate(['/'])
  }
}
