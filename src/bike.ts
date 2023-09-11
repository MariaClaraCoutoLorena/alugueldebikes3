export class Bike {
    constructor(
        public name: string,
        public type: string,
        public bodySize: number,
        public maxLoad: number,
        public rate: number,
        public description: string,
        public ratings: number,
        public imageUrls: string[],
        public disponibilidade: boolean,
        public valorDiario: number,
        public dateFrom: Date,
        public dateTo: Date,
        public id?: string
    ) {}
}