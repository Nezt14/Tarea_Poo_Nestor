import { VIPStatus } from "./benefits";



export default class VIPClient implements VIPStatus{
    constructor(public name:string){}

    public VipBenefits(): string {
        return `Los beneficios por ser un cliente VIP son... `
    }

    public ListVIP():void{
        console.log(ListaVip) 
    }

}

const VIP1 = new VIPClient(`Rogrigo`);
const VIP2 = new VIPClient(`Manue`);

export const ListaVip = [VIP1,VIP2]