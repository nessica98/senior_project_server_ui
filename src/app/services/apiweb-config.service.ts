import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIWebConfigService {
  BaseUrl:string;
  constructor() { 
    this.BaseUrl = environment.apiUrl
  }
  getBaseURL():string{
    return this.BaseUrl
  }
}
