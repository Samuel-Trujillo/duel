class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res = target.res - this.power;
        console.log(this.name + " attacked "+ target.name)
    }
}

class Effect extends Card{
    constructor(name, cost, power, res, text){
        super(name,cost);
        this.power = power;
        this.res = res;
        this.text = text;
    }

    play(target){
        if(target instanceof Unit){
            target.res = target.res + this.res;
            target.power = target.power + this.power
            console.log(this.text);
        }else{
            throw new Error("target must be a unit!");
        }
    }  
}

const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
const hard = new Effect("Hard Algorithm", 2, 0, 3, "increased targets resilience by 3" );
const reject = new Effect("Unhandled Promise Rejection", 1, 0, -2, "reduced targets resilience by 2");
const pair = new Effect("Pair Programming", 3, 2, 0, "increased targets power by 2");

hard.play(redBelt);
console.log(redBelt.res);
reject.play(redBelt);
console.log(redBelt.res);
pair.play(redBelt)
console.log(redBelt.power);
redBelt.attack(blackBelt);
console.log(blackBelt.res);

