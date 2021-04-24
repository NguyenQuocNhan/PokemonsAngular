import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  clicked(): void {
    window.alert("click");
  }

  // Get pokemons
  getPokemons() {
    this.dataService.GetPokemons(50, (this.page - 1) * 50 + 0)
      .subscribe((res: any) => {

        this.totalPokemons = res.count;

        res.results.forEach(result => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqres: any) => {
              this.pokemons.push(uniqres);
              //console.log(this.pokemons);
            });
        });
      });
  }
}
