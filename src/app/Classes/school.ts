import { Kid } from "./kid";
import { Teacher } from "./teacher";
import { Bus } from "./bus";
import { Service } from "./service";
import { Group } from "./group";

export class School {
    id: string;
    name: string;
    telephone: string;
    email: string;
    address: string;
    servizi: Service[];
    kids: Kid[];
    teachers: Teacher[];
    buses: Bus[];
    // sections: string[];
    assenze:string[];
    groups: Group[];

    constructor() {}

    // constructor(id:string, name?:string, telephone?:string, email?:string, address?:string, servizi?:Service[], kids?:Kid[], teachers?:Teacher[], buses?:Bus[], assenze?:string[], groups?:Group[]) {
    //     this.id = id;
    //     this.name = name;
    //     this.telephone = telephone;
    //     this.email = email;
    //     this.address = address;
    //     this.kids = kids;
    //     this.servizi = servizi;
    //     this.teachers = teachers;
    //     this.buses = buses;
    //     this.assenze = assenze;
    //     this.groups = groups;
    // }
}