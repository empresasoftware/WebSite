import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class AuthSignup-electionPageResolver implements Resolve<any> {

  resolve(): Promise<any> {
    return new Promise((resolve, reject) => {

      return resolve({
        seo: {
          title: 'Create an account-election',
          description: '',
          keywords: '',
          image_url: ''
        }
      });
    });
  }
}
