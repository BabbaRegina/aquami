
import { ObjectID } from 'mongodb';

export class Event {
    _id: ObjectID;
    tipoEvento: string;
    ferti: Fertilizzazione;
    test: Test[];
    note: string;
    dataMisura: Date;
    dataRegistrazione: Date;

    constructor(tipo: string){
      this.tipoEvento = tipo;
      this.dataRegistrazione= new Date();
      this.dataMisura = new Date();
      this.note = '';
      this.ferti = new Fertilizzazione();
    }

    isFertilizzazione(): boolean {
        if (this.tipoEvento==='Fertilizzazione') {
            return true;
        } else {
            return false;
        }
    }
}

export class Fertilizzazione {
    k2so4: number;
    k2no3: number;
    magnesio: number;
    generico: number;
    fosfati: number;
    ferro: number;

    constructor() {
        
    }
}

export class Test {
    tipo: string;
    valMin: number;
    valMax: number;
}