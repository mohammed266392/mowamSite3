
export class SousOnglet {
    name : string
    nameNavigate :string

    constructor(name: string, nameNavigate: string ) {
        this.name = name;
        this.nameNavigate = nameNavigate;
    }

    getName() : string {
        return this.name
    }
    getShortName() : string {
        return this.name.split(" ")[0]
    }

    getNameNavigate() : string {
        return this.nameNavigate
    }
}

export class Galerie {
    constructor(
        public title : string,
        public subtitle :string,
        public backgroundUrl:string,
        public photosUrl : string[]){}
   
    getTitle() : string {
        return this.title
    }
    getSubTitle() : string {
        return this.subtitle
    }
    getBackgroundUrl() : string {
        return this.backgroundUrl
    }
    getPhotosUrl() : string[] {
        return this.photosUrl
    }
}


export class Onglet {
    id : number
    name : string
    nameNavigate :string
    sousOngletsIsOpen = false
    sousOnglets :SousOnglet[]

    constructor(id : number, name: string, nameNavigate: string, sousOnglets: SousOnglet[] ) {
        this.id = id;
        this.name = name;
        this.nameNavigate = nameNavigate;
        this.sousOngletsIsOpen = false;
        this.sousOnglets = sousOnglets;
    }

    getName() : string {
        return this.name
    }
    getShortName() : string {
        return this.name.split(" ")[0]
    }
    getNameNavigate() : string {
        return this.nameNavigate
    }
    getSousOnglets() : SousOnglet[] {
        return this.sousOnglets
    }

    getId() : number {
        return this.id
    }

    setSousOngletsIsOpen( value : boolean){
        this.sousOngletsIsOpen = value
    }
    toogleSousOngletsIsOpen(){
        this.sousOngletsIsOpen = !this.sousOngletsIsOpen 
    }
    getSousOngletsIsOpen() : boolean {
        return this.sousOngletsIsOpen
    }
}
export class Prospect{
    constructor( public id : number,
        public userName : string,
        public email : string,
        public companyName : string){}
}
export class ObjectService{
    buttonIsPresent : boolean;
    constructor( public id : number,
        public src : string,
        public icon : string,
        public title : string,
        public description : string,
        public chemin : string){
            this.buttonIsPresent = true
        }
    getButtonIsPresent() : boolean {
        return this.buttonIsPresent
    }

    setButtonIsPresent(value : boolean) : void {
        this.buttonIsPresent = value
    }
}
