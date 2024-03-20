import { Component, Inject, OnInit,  inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import {  Router, RouterLink } from '@angular/router';


import { Subscription, of } from 'rxjs';
import { Authservice } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{

  subscription: Subscription = new Subscription();
  private router = inject(Router);
  public  authService = inject(Authservice);
  public nombreCompleto =  "";
  public correoElectronico =  "";
  public estaAutenticado = "";
  private counter:any;
  constructor() {
   
  }
  ngOnInit(): void {
   
  }



  
}
