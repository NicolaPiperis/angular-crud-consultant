import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Consultant } from '../interface/consultant'
import { ConsultantService } from '../consultant.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultants',
  standalone: true,
  imports: [
    NgFor,
    NgIf, 
    RouterModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './consultants.component.html',
  styleUrl: './consultants.component.css'
})
export class ConsultantsComponent implements OnInit {
  consultantService = inject(ConsultantService)
  isLoading: boolean = false;
  consultants: Consultant[] = []

  ngOnInit() {
    this.getConsultants()
  }
  
  async getConsultants () {
    try {
      this.isLoading = true
      console.log('prima')
      await new Promise(resolve => setTimeout(resolve, 3000))
      let response = await this.consultantService.getConsultant()
      console.log('richiesta')
      response.subscribe((data) => {
        this.consultants = data
        console.log('dopo', data)
      })
    } catch {}
    this.isLoading = false
  }


}
