import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, computed, inject, signal,PLATFORM_ID  } from "@angular/core";
import { Observable, catchError, map, of, tap, throwError } from "rxjs";
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from "../interfaces";

import {Router, ActivatedRoute, Params} from '@angular/router';
import { PerfilUsuarioResponse } from "../interfaces/perfil-usuario-response";
import { response } from "express";


@Injectable({
    providedIn: 'root'
  })
  export class Authservice {
    public readonly arrayPalabras: string[] =  ['mis-eventos', 'mis-favoritos', 'mis-perfil'];
    private readonly BaseUrl =  "http://localhost:4201/api";
  
    private _currentUser= signal<User|null>(null);
    private _authStatus = signal<AuthStatus>(AuthStatus.chechking);
   
    public currentUser=  computed(()=>this._currentUser());
    public authStatus=  computed(()=>this._authStatus());
    private activatedRoute= inject(ActivatedRoute);
    constructor(private http: HttpClient) {

    }

    private setAuthentication(user: User, token:string, expiracion:string): boolean {

      debugger;
      this._currentUser.set( user );
      this._authStatus.set( AuthStatus.authenticated ); 
      window.localStorage.setItem('cated', "true");   
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('ex', expiracion);
      window.localStorage.setItem('_sa', "itekt");  
      return true;
    }
    checkAuthStatus(token: string): Observable<AuthStatus> {
      debugger;
      const url = `${this.BaseUrl}/usuario/auth/@me`;
      const tokens =  (this.arrayPalabras.includes(token)) ? window.localStorage.getItem('token') : token;     
      
      if (!tokens) {
        return of(AuthStatus.notAuthenticated);
      }
      
      const headers = new HttpHeaders().set('Authorization', `Bearer ${tokens}`);
      
      return this.http.get<CheckTokenResponse>(url, { headers }).pipe(
        map(({ HEADER_token, RESPONSE }) => {
          console.log(RESPONSE);
          // Puedes realizar más lógica según tu aplicación
          this.setAuthentication(RESPONSE.user, RESPONSE.token, RESPONSE.fecha_expiracion);
          return AuthStatus.authenticated;
        }),
        catchError((error) => {
          console.error('Error en la solicitud HTTP:', error);
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(AuthStatus.notAuthenticated);
        })
      );
      
     
    }
    obteenerPerfilUsuario(){
      const tokens =  window.localStorage.getItem('token');     
      const url = `${this.BaseUrl}/usuario/obtenerUsuario/`+tokens;
      const headers = new HttpHeaders().set('Authorization', `Bearer ${tokens}`);
      return this.http.get<PerfilUsuarioResponse>(url, { headers }).pipe(
        map(({ HEADER, RESPONSE }) => {
          console.log(HEADER);
          console.log(RESPONSE);
          if (HEADER?.CODE==200) {
            return response;
          } else {

            return null;
          }
          // Puedes realizar más lógica según tu aplicación
         
        
        }),
        catchError((error) => {
          console.error('Error en la solicitud HTTP:', error);
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(AuthStatus.notAuthenticated);
        })
      );
    }
/*
    checkAuthStatus(token:any):Observable<boolean> {
      console.log('checkAuthStatus');
      const url   = `${ this.BaseUrl }/usuario/auth/refreshToken`;
     
  
      if ( !token ) {
       // this.logout();
        return of(false);
      }
  
      
  
  
    }*/
    logout() {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('_sa');  
      this._currentUser.set(null);
      this._authStatus.set( AuthStatus.notAuthenticated );
  
    }
  

}