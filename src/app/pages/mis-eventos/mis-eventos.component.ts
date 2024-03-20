import { Component, OnInit, inject } from '@angular/core';
import { Authservice } from '../../service/auth.service';


@Component({
  selector: 'app-mis-eventos',
  standalone: true,
  imports: [],
  templateUrl: './mis-eventos.component.html',
  styleUrl: './mis-eventos.component.css'
})
export class MisEventosComponent implements OnInit  {

   authService = inject( Authservice );
  ngOnInit(): void {
    this.ObtenerUsuario();
  }
  ObtenerUsuario() {

    return this.authService.obteenerPerfilUsuario().toPromise().then(authStatus => {
     console.log(authStatus);
    }).catch(() => false);
  
  }

}
