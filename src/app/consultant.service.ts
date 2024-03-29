import { Injectable } from '@angular/core';
// importo http client ma prima bisogna farlo su config.ts!
import { HttpClient } from '@angular/common/http';
import { Consultant } from './interface/consultant';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  private apiUrl = 'https://crudcrud.com/api/a03dd82b2c7748f1a8faf217c9d2ea63'
  constructor(private http: HttpClient) { }

  createConsultant(
    consultant: Consultant
  ) {
    return this.http.post<{ _id: string } & Consultant>(`${this.apiUrl}/create-consultant`, consultant)
  }
}
