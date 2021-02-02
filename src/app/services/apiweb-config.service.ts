import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIWebConfigService {
  BaseUrl:string;
  constructor() { 
<<<<<<< HEAD
    this.BaseUrl = 'http://localhost:5020/api'
=======
    this.BaseUrl = environment.apiUrl
>>>>>>> 5bf0fa106659a2af6f776c51510e319985e5decb
  }
  getBaseURL():string{
    return this.BaseUrl
  }
}
