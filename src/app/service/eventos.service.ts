import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Response,DetalleEventoResponse } from '../interfaces/req-detalleEvento-Response';
import { Evento, EventosResponse, parametrosFiltroRequest } from '../interfaces/req-eventos-response';
import { FechaResponse, ListaFecha } from '../interfaces/req-fechas-response';
import { Observable, catchError, delay, map, of, throwError } from 'rxjs';
import { Authservice } from './auth.service';
import { ResponsePost } from '../interfaces/req-post-response';
import { EventoFavorito, FavoritoResponse } from '../interfaces/req-favoritos-response-interfaces';
import { response } from 'express';

interface State{
  eventos:Evento[];
  loading:boolean;
}
interface StateBuscadorEventos{
  eventos:Evento[];
  loading:boolean;
}
interface StateEventosFavoritos{
  favoritos:EventoFavorito[];
  loading:boolean;
}
interface StateDetalleDelEventos{
  detalleEventos:Response[]
  loading:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private readonly BaseUrl =  "http://localhost:4201/api";

  //private  authService = inject(Authservice);
  public EventosXPagina = 24;
  public nroPagina = 0;
  public _eventos = signal<Evento[]>([]);
  public _loading_searchEvento = signal(false);
  public  _parametrosFiltroRequest = signal<parametrosFiltroRequest|undefined>(undefined);
  #state =  signal<State>({
    loading:false,
    eventos: [],
  });
  #StateBuscadorEventos =  signal<StateBuscadorEventos>({
    loading:false,
    eventos: [],  
  });
  #StateDetalleDelEventos =  signal<StateDetalleDelEventos>({
    loading:false,
    detalleEventos: [],  
  });
  private statusFavorite = signal(false);
  private eventoFavorito= signal<EventoFavorito[]|null>(null);
  public eventos =  computed(()=> this.#state().eventos);
  public loading =  computed(()=> this.#state().loading);
  public BusquedaEventos =  computed(()=> this.#StateBuscadorEventos().eventos);
  public BusquedaEventosloading =  computed(()=> this.#StateBuscadorEventos().loading);
  public DetalleDelEventos =  computed(()=> this.#StateDetalleDelEventos().detalleEventos);
  public DetalleDelEventosloading =  computed(()=> this.#StateDetalleDelEventos().loading);
  public computedStatusFavorite = computed(()=>this.statusFavorite())
  public computedEventoFavorite = computed(()=>this.eventoFavorito())
  public Lista_filtro_eventos =  computed(()=> this._eventos);

  constructor(private http: HttpClient) {
      
  }
  //#region metodos

  public  getListarFechaDelEventoSeleccionado(idEvento:string): Observable<ListaFecha[]>{    
    return this.http.get<FechaResponse>("http://localhost:4201/api/eventos/getListarFechaDelEventoSeleccionado/"+idEvento)
    .pipe(
      delay(1500),
      map( resp => resp.RESPONSE )
    )
  }
  public removeFavorito(body:object):Observable<string>{
    const url   = `${ this.BaseUrl }/usuario/eliminar_favoritos`;
    const token = window.localStorage.getItem('token');

    if ( !token ) {
     // this.authService.logout();
      return of("Error de token");
    }
    const headers = new HttpHeaders()
                                .set('Authorization', `Bearer ${ token }`);
   return  this.http.delete<ResponsePost>(url +"/"+body, {headers: headers})
             .pipe(
               map( ({ HEADER,RESPONSE }) => {
                this.statusFavorite.set(false);
                return  HEADER.MESSAGE;
               }),
               catchError( err => throwError( () => err.error.message ))
              );

  }  
  public SaveOrDeleteFavorito(body:object):Observable<string>{
    const url   = `${ this.BaseUrl }/usuario/createFavoritos`;
    const token = window.localStorage.getItem('token');

    if ( !token ) {
    //  this.authService.logout();
      return of("Error de token");
    }
    const headers = new HttpHeaders()
                                .set('Authorization', `Bearer ${ token }`);
   return  this.http.post<ResponsePost>(url, body,{headers: headers})
             .pipe(
               map( ({ HEADER,RESPONSE }) => {
                if(RESPONSE===1){
                  this.statusFavorite.set(false);
                } else {
                  this.statusFavorite.set(true);
                } 
                return  HEADER.MESSAGE;
              
               }),
               catchError( err => throwError( () => err.error.message ))
              );

  }
  public  getEventoSeleccionado(id:string,fecha:string): Observable<Response>{    
    return this.http.get<DetalleEventoResponse>("http://localhost:4201/api/eventos/consultar_evento_seleccionado/"+id+"/"+fecha)
    .pipe(
      delay(1500),
      map( resp => resp.RESPONSE[0] )
    )
  }
  public async GetListarEventosXPalabras(palabras:string){
    if(palabras!=""){
      return this.http.get<EventosResponse>("http://localhost:4201/api/eventos/listar_eventos_filtro_letras/"+palabras)
      .subscribe((res) => {
         if(res.HEADER.CODE == 200){
           this.#StateBuscadorEventos.set({ 
             loading: true,
             eventos: res.RESPONSE,
           });
         } 
      });
    } else {
     return  this.#StateBuscadorEventos.set({ 
        loading: false,
        eventos: [],
      });

    }
  }

  public getListarFavoritosGuardados():Observable<EventoFavorito[]>{
    const url   = `${ this.BaseUrl }/usuario/consultarfavoritos`;
    const token = window.localStorage.getItem('token');

    const headers = new HttpHeaders()
                              .set('Authorization', `Bearer ${ token }`);
    return this.http.get<FavoritoResponse>(url,{headers: headers})
    .pipe(
      map( ({ HEADER,RESPONSE }) => {  this.eventoFavorito.set(RESPONSE);  return RESPONSE;},
      catchError( err => throwError( () => err.error.message ))
    ));
  }
  public  getEventos(): Observable<Evento[]>{
 
    const url   = `${ this.BaseUrl }/eventos/listarEventosxPaginate/${this.EventosXPagina}/${this.nroPagina}`;
    return this.http.get<EventosResponse>(url)
    .pipe(
      map( ({ HEADER,RESPONSE }) => {  return RESPONSE;},
      catchError( err => throwError( () => err.error.message ))
    ));
  }
//#endregion
 

public  getEventosporFiltro(datos: parametrosFiltroRequest | undefined): Observable<Evento[]>{
 
    const url   = `${ this.BaseUrl }/eventos/listar_Eventos_Publicos_filtro/`;
    return this.http.post<EventosResponse>(url,datos)
    .pipe(
      map( ({ HEADER,RESPONSE }) => {  return RESPONSE;},
      catchError( err => throwError( () => err.error.message ))
    ));
  }


  get listaEventos() {
    return this._eventos.asReadonly();
  }
  refresh(): void {
   // this._eventos.set([]);
    this._loading_searchEvento.set(false);
    this.getEventosporFiltro(this._parametrosFiltroRequest()).subscribe((evento) => {
      console.log(evento[0]);
      this._eventos.set(evento);
      this._loading_searchEvento.set(true);
    });
  }

}
