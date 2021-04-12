export interface PortafolioItem {
    client: string;
    collaborators: string;
    date: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    image: string;
    image2: string;
    link: string;
    name: string;
    nameLink: string;
    technologies: string;
    type: string;
  }

  export class PortafolioItemClass {
    constructor(
      public client: string,
      public collaborators: string,
      public date: string,
      public description: string,
      public description2: string,
      public description3: string,
      public description4: string,
      public image: string,
      public image2: string,
      public link: string,
      public name: string,
      public nameLink: string,
      public technologies: string,
      public type: string
    ) {}
  }