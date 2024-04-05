import { Injectable } from '@angular/core';
// importo http client ma prima bisogna farlo su config.ts!
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Consultant } from './interface/consultant';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private apiUrl = 'https://crudcrud.com/api/53ea40c153d44b9c837bf55d429480b5'
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
