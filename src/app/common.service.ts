import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  username : string = "";

  constructor() { }

  setUsername(data:any){

    this.username = data
  }

  getUserName(){
    return this.username;

  }

}
