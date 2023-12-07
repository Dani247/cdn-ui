import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map, of, catchError } from 'rxjs';

function redirecToLogin() {
  const baseURL = `https://cdn-ui.vercel.app`;
  // const baseURL = `http://localhost:4200`;
  window.location.href = `https://auth-ui-sooty.vercel.app?redirect=${baseURL}`
}

export const authGuard: any = () => {
  const authService = inject(AuthService);

  const url = new URL(window.location.href);
  const access_token = url.searchParams.get('access_token');
  if (access_token) {
    localStorage.setItem("access_token", access_token);
  }
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    // check if token is valid
    return authService.validateToken(accessToken)
      .pipe(map(() => true))
      .pipe(catchError((err) => {
        console.log("err", err);
        redirecToLogin();
        return of(false)
      }));
  }

  redirecToLogin();
  return of(false);
};
