import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  callCenter!:string;
  
  constructor() { 
    this.callCenter='444 1 236';
  }
}
