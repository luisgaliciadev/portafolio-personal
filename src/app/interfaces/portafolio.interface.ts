export interface Portafolio {
    description: string;
    id: number;
    image: string;
    link: string;
    name: string;
    type: string;
}

export class PortafolioClass {
  constructor(
    public description: string,
    public id: number,
    public image: string,
    public link: string,
    public name: string,
    public type: string
  ) {}
}

