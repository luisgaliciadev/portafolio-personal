export interface PageInfo {
    email: string;
    gitHub: string;
    linkedin: string;
    name: string;
    phone: string;
    title: string;
    linkWhatsApp: string;
    address: string;
    city: string;
    country: string;
}

export class PageInfoClass {
    constructor(
        public email: string,
        public gitHub: string,
        public linkedin: string,
        public name: string,
        public phone: string,
        public title: string,
        public linkWhatsApp: string,
        public address: string,
        public city: string,
        public country: string
    ){}
}