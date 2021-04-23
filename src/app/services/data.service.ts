import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { IPokemon, Pokemon } from '../models/Pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private pokeURL = 'https://pokeapi.co/api/v2';

  constructor(
    private http: HttpClient
  ) { }

  // Get Pokemons
  getPokemon(limit?: number, offset?: number): Observable<any> {
    return this.http.get<any>(`${this.pokeURL}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map(res => res.results.map(obj => new Pokemon(obj.url.match(/\/pokemon\/(\d+)\//)[1], obj.name)))
      );
  }

  // Get more Pokemons Data
  getPokemonData(name: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${this.pokeURL}/pokemon/${name}`);
  }
}
