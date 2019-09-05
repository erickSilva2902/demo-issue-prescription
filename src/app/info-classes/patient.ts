export class Patient {
    constructor(
        public index: number,
        public personId: string,
        public firstName: string,
        public lastName: string,
        public secondLastName: string,

        public member: string,
        public type: string

    ) { }
}