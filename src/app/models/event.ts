export class Event {
    _id?: string;
    tipoEvento: string;
    ferti: Fertilizzazione[];
    test: Test[];
    note: string;
    dataMisura: Date;
    dataRegistrazione: Date;
}

export class Fertilizzazione {
    tipo: string;
    dose: number;
}

export class Test {
    tipo: string;
    valMin: number;
    valMax: number;
}