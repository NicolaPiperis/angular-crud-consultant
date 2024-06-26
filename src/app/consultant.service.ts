import { Injectable } from '@angular/core';
// importo http client ma prima bisogna farlo su config.ts!
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Consultant } from './interface/consultant';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private apiUrl = 'https://crudcrud.com/api/2701e55d27ef489bb5dc5bd7c24e0f05'
  constructor(private http: HttpClient) { }

  createConsultant(
    consultant: Consultant 
  ) {
    return this.http.post<{ _id: string } & Consultant>(`${this.apiUrl}/consultant`, consultant)
  }

  getConsultant() {
    return this.http.get<Consultant[]>(`${this.apiUrl}/consultant`)
  }

  getConsultantById(
    _id: string | null
  ) {
    return this.http.get<Consultant>(`${this.apiUrl}/consultant/${_id}`)
  }

  putConsultant(
    _id: string | null | undefined,
    consultant: Consultant
  ) {
    return this.http.put<{ _id: string } & Consultant[]>(`${this.apiUrl}/consultant/${_id}`, consultant)
  }

  delateConsultant(
    _id: string | null | undefined
  ) {
    return this.http.delete(`${this.apiUrl}/consultant/${_id}`)
  }

}
