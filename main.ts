import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { ListaVip } from './ClientVIP';
import { REGlista } from './ClientReg';
import RegularClient from './ClientReg';
import VIPClient from './ClientVIP';
import { RegularStatus } from './benefits';
import { VIPStatus } from './benefits';
import { Reg1 } from './ClientReg';
import { VIP1 } from './ClientVIP';

export class Clients {
    constructor(public name: string) { }
}

async function main() {
    const rl = readline.createInterface({ input, output });

    try {
        const opcion = Number(await rl.question("Que opcion desea usar? \n Opcion 1 = Lista de clientes VIP \n Opcion 2 = Lista de clientes Regulares \n Opcion 3 = ambas listas \n Opcion 4 = Modificar algo: \n Opcion 5 = Salir \n opcion: "))


        switch (opcion) {
            case 1:
                console.log(ListaVip)
                break;
            case 2:
                console.log(REGlista)
                break;
            case 3:
                console.log(`Lista regular: `+ REGlista[0]['name'] + ` y los beneficios: `+ Reg1.RegularBenefits()  + ` \n Lista VIP: `+ ListaVip +`y los beneficios: `+ VIP1.VipBenefits())
                break;
            case 4:
                const opcion2 = Number(await rl.question("Que opcion desea usar? \n Opcion 1 = Agregar un cliente Regular \n Opcion 2 = Agregar un cliente VIP \n Opcion 3 = eliminar el ultimo cliente creado \n Opcion 4 = Modificar un cliente: \n Opcion 5 = Volver \n opcion: "))
                switch (opcion2) {
                    case 1:
                        //agregar Regular
                        const NewName = await rl.question("Ingrese el nombre del nuevo usuario Regular: ")
                        const cr1 = new RegularClient(NewName)
                        REGlista.push(cr1)
                        console.log(`Nuevo cliente agregado con exito \n Regresando...`)
                        rl.close();
                        break;
                    case 2:
                        //Agregar VIP
                        const NewName1 = await rl.question("Ingrese el nombre del nuevo usuario VIP: ")
                        const CVIP1 = new VIPClient(NewName1)
                         ListaVip.push(CVIP1)
                        console.log(`Nuevo cliente VIP agregado con exito \n Regresando...`)
                        
                        rl.close();
                        break;
                        case 3:
                            //eliminar
                            const opcion3 = Number(await rl.question("Que tipo de usuario quiere eliminar? \n Opcion 1 = CLiente VIP \n Opcion 2 = Cliente Regular \n opcion: "))
 
                            switch (opcion3) {
                                case 1:
                                    const eliminar = Number(await rl.question(`Desea eliminar el ultimo usuario Regular creado? \n Si = 1. \n No = 2. \n opcion: `))
                            if (eliminar == 1) {
                                REGlista.pop()

                            }else {
                                console.log(`Regresando al menu principal...`)
                            }
                                    break;
                                    case 2:
                                        const eliminar1 = Number(await rl.question(`Desea eliminar el ultimo usuario VIP creado? \n Si = 1. \n No = 2. \n opcion: `))
                            if (eliminar1 == 1) {
                                ListaVip.pop()

                            }else {
                                console.log(`Regresando al menu principal...`)
                            }
                                        break;
                            
                                default:
                                    break;
                            }
                            
                        break;
                        case 4:
                            //modificar
                            const opcion4 = Number(await rl.question("Que tipo de usuario quiere modificar? \n Opcion 1 = CLiente VIP \n Opcion 2 = Cliente Regular \n opcion: "))
 
                            switch (opcion4) {
                                case 1://modificar cliente vip
                                    const opcion5 = Number(await rl.question(`De 0 a 2 seleccione el usuario que desea modificar: `))
                                    const NNewName = await rl.question(`Escriba el nuevo nombre de este usuario:  `)
                                    const modificado = new VIPClient(NNewName)
                                    ListaVip[opcion5] = modificado
                                    console.log("Regresando...")
                                    break;
                                    case 2:
                                        const opcion6 = Number(await rl.question(`De 0 a 2 seleccione el usuario que desea modificar: `))
                                    const NNewName1 = await rl.question(`Escriba el nuevo nombre de este usuario:  `)
                                    const modificado1 = new RegularClient(NNewName1)
                                 REGlista[opcion6] = modificado1
                                 console.log("Regresando...")
                                        break;

                        
                                default:
                                    break;
                            }
                            
                            
                        break;
                        case 5:
                            //volver
                            
                        
                        break;

                    default:
                        console.log(`Regresando al menu anterior...`)
                        return;
                }
                break;
            case 5:
                console.log(`Saliendo del programa`)
                rl.close()
                return;
                
            default:

                break;

        }setTimeout(inicioMenu, 2000)
    } catch (error) {
        console.error(`Seleccione una opcion valida`);
    } finally {
        rl.close()
    }
}

function inicioMenu() {
    main();
}


inicioMenu();
