export interface IPokemon {
  id: number;
  name: string;
}

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
  ){}
}
