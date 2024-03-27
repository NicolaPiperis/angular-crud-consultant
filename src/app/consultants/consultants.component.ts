import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { CONSULTANT } from '../interface/consultant'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultants',
  standalone: true,
  imports: [
    NgFor,
    NgIf, 
    RouterModule
  ],
  templateUrl: './consultants.component.html',
  styleUrl: './consultants.component.css'
})
export class ConsultantsComponent {
  isLoading: boolean = true;

ngOnInit(): void {
  setTimeout(() => {
    this.isLoading = false;
  }, 1500);
}

  consultants: CONSULTANT[] =  [
    {
      name: 'Nicola',
      surname: 'Piperis',
      mail: 'nicolapiperis9999@gmail.com',
      phone: '+39 3333333333'
    },
    {
      name: 'Andrea',
      surname: 'Minciotti',
      mail: 'andreaminciotti@gmail.com',
      phone: '+39 2222222222'
    },
  ]

}
