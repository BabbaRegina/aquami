import _ from 'lodash';
import { ObjectID } from 'mongodb';

export class Event {
    _id: ObjectID;
    ferti: Fertilizzazione;
    test: Test;
    manutenzione: Manutenzione;
    note: string;
    dataMisura: Date;
    dataRegistrazione: Date;

    constructor() {
      this.dataRegistrazione = new Date();
      this.dataMisura = null;
      this.note = '';
      this.ferti = new Fertilizzazione();
      this.test = new Test();
      this.manutenzione = new Manutenzione();
    }

}

export class Fertilizzazione {
    k2so4: number;
    k2no3: number;
    magnesio: number;
    generico: number;
    fosfati: number;
    ferro: number;

    altro: {
        dose: number;
        tipo: string;
    };

    constructor() {}
}

export class Test {
    khmin: number;
    khmax: number;
    ghmin: number;
    ghmax: number;
    phmin: number;
    phmax: number;
    no3min: number;
    no3max: number;
    no2min: number;
    no2max: number;
    femin: number;
    femax: number;
    fomin: number;
    fomax: number;
    ec: number;

    constructor() {}
}

export class Manutenzione {
    acqua: number;
    khrubi: number;
    khacqua: number;
    vetro: boolean;
    potatura: boolean;
    filtroLana: boolean;
    filtroSpugna: boolean;
    filtroPompa: boolean;
    batteri: number;
    lampada: boolean;

    altro: {
        tipo: string;
        dose: number;
    };

    constructor() {}
}

