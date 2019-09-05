export class Doctor {
    constructor(
        public index: number,
        public personId: string,
        public firstName: string,
        public lastName: string,
        public secondLastName: string,

        public professionalLicense: string,

        public member: string,

        public workAddress: string,
        public address: string,

        public token: string,
        public username: string,
        public password: string

    ) { }
}