import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SiderbarComponent} from './components/siderbar/siderbar.component';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SiderbarComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    if (typeof window !== "undefined") {
      initFlowbite();
    } 
  }
}
