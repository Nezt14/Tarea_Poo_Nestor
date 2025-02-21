export class Clients {
    constructor(public name: string) { }
}

export interface RegularStatus{
    RegularBenefits():string;
}

export interface VIPStatus{
    VipBenefits():string;
}