import { Component, OnInit } from '@angular/core';
import { IPokemon, Pokemon } from '../models/Pokemon.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: IPokemon[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemonList();
  }

  //
  getPokemonList(limit: number = 100, offset: number = 0): void {
    this.dataService.getPokemon(limit, offset).subscribe( res => this.pokemons = res );
  }

}
