import { VIPStatus } from "./benefits";
import { Clients } from "./benefits";


export default class VIPClient extends Clients implements VIPStatus{
    constructor(public name:string){
        super(name)
    }

    public VipBenefits(): string {
        return `Los beneficios por ser un cliente VIP son... `
    }

    public ListVIP():void{
        console.log(ListaVip) 
    }

}

export const VIP1 = new VIPClient(`Rogrigo`);
const VIP2 = new VIPClient(`Manue`);

export let ListaVip = [VIP1,VIP2]