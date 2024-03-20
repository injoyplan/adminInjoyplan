import { Component, OnInit, inject } from '@angular/core';
import { Authservice } from '../../service/auth.service';

@Component({
  selector: 'app-mi-perfil',
  standalone: true,
  imports: [],
  templateUrl: './mi-perfil.component.html',
  styleUrl: './mi-perfil.component.css'
})
export class MiPerfilComponent implements OnInit  {
  authService = inject( Authservice );
  ngOnInit(): void {
    console.log('ssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
    //this.ObtenerUsuario();
  }
  ObtenerUsuario() {
    return this.authService.obteenerPerfilUsuario().toPromise().then(resultado => {
      console.log(resultado);
     }).catch(() => false);
   
  }

}
