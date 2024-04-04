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
}
