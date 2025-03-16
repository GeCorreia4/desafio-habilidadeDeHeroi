class Hero {
    constructor(nameHero, ageHero, typeHero) {
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.typeHero = typeHero;

        if (typeHero == "mago") {
            this.atackHero = "magia";
        } else if (typeHero == "guerreiro") {
            this.atackHero = "espada";
        } else if (typeHero == "monge") {
            this.atackHero = "artes marciais";
        } else if (typeHero == "ninja") {
            this.atackHero = "shuriken";
        }
    }
    atacar(){
        console.log(`O herói ${this.nameHero} é um ${this.typeHero} e atacou usando ${this.atackHero}.`);
    }
}

const heroAbility = new Hero("Gabriel", 71, "monge");

heroAbility.atacar();
