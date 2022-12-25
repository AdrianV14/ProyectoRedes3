import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {

  constructor() { }

  esEmailValido(email: string):boolean {
    let mailValido = false;

      var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@.["edu"]+.[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-]+)*$/;

      if (email.match(EMAIL_REGEX)){
        mailValido = true;
      }
    return mailValido;
  }
}
