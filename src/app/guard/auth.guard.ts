import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { AuthStatus } from '../interfaces';
import { Authservice } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  const authService = inject( Authservice );
  const tokenFromParams = route.params['token'] || '';
  const tokenFromStorage = window.localStorage.getItem('_sa') || '';
  const token =  (tokenFromParams=='') ? window.localStorage.getItem('token')  : tokenFromParams ;

  if (token) {
    return authService.checkAuthStatus(token).toPromise().then(authStatus => {
      if (authStatus === AuthStatus.authenticated) {
        return true;
      } else {
        window.location.href = 'http://localhost:63095/login';// Ajusta la ruta según tus necesidades
        return false;
      }
    }).catch(() => false);
  } else {
    window.location.href = 'http://localhost:63095/login';
    return false;
  }
};
