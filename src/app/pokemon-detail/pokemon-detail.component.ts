import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon?: any;

  constructor(
    private dataService: DataService,
    protected route: ActivatedRoute,
    protected location: Location,
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getPokemon(id).subscribe((res: any) => {
      this.pokemon = res;
    })
  }

  back(): void {
    this.location.back();
  }
}
