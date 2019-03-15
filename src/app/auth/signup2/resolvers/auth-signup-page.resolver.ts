import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class AuthSignup2PageResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {

      return resolve({
        seo: {
          title: 'Create an account',
          description: '',
          keywords: '',
          image_url: ''
        }
      });
    });
  }
}
