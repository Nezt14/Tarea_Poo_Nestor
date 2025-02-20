import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { ListaVip } from './ClientVIP';
import { REGlista } from './ClientReg';
import RegularClient from './ClientReg';
import VIPClient from './ClientVIP';

export class Clients {
    constructor(public name: string) { }
}

async function main() {
    const rl = readline.createInterface({ input, output });

    try {
        const opcion = Number(await rl.question("Que opcion desea usar? \n Opcion 1 = Lista de clientes VIP \n Opcion 2 = Lista de clientes Regulares \n Opcion 3 = ambas listas \n Opcion 4 = Modificar algo: \n Opcion5 = Salir \n opcion: "))


        switch (opcion) {
            case 1:
                console.log(ListaVip)
                break;
            case 2:
                console.log(REGlista)
                break;
            case 3:
                console.log(`Lista regular: ${REGlista}. \n Lista VIP: ${ListaVip}`)
                break;
            case 4:

                switch (key) {
                    case value:

                        break;

                    default:
                        break;
                }
                break;
            case 5:
                rl.close()
                break;

        }
    } catch (error) {
        console.log(error);
    } finally {
        rl.close()
    }
}

main();
