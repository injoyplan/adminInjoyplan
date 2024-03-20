import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  standalone: true,
  imports: [
    CommonModule,RouterLink
  ],
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css',
})
export  class SiderbarComponent { }
