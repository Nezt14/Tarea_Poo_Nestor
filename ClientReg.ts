import { RegularStatus } from "./benefits";
import { Clients } from "./benefits";



export default class RegularClient extends Clients implements RegularStatus{
    constructor(name:string){
        super(name)
    }

    public RegularBenefits(): string {
        return `Los beneficios por ser un cliente regular son... `
    }

    public RegularList():void{
        console.log(REGlista)   
    }
}

export const Reg1 = new RegularClient(`Carlos`)
export const Reg2 = new RegularClient(`fige`)

export let REGlista = [Reg1,Reg2]

