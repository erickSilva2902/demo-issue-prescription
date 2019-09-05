import { Doctor } from './doctor';
import { Drug } from "./drug";
import { AditionalInfo } from "./aditional-info";

export class Prescription {
    constructor (
        public doctor: Doctor,
        public patient: string,
        public drugs: Drug [],
        public aditionalInfo: AditionalInfo,
        public clientIdentifier?: string
    ) { 

    }
}

// {
//     "clientIdentifier": "XXXXXXXXXXXXXXX",
//     "workAddress": "resource:com.hoffentech.base.doctor.PrivateWorkAddress#WorkAddress_005",
//     "patient": "resource:com.hoffentech.base.role.BankEmployee#MemBankEmp_001",

//     "drugs": [{ "$class": "com.hoffentech.prescription.Drug", "eanCode": "7501300408136", "drugGenericName": "Amoxicilina, Ácido Clavulánico.", "drugPresentation": "Caja con 14 comprimidos.", "dosage": "Tomar una tableta cada 12 horas", "administrationRoute": "ORAL", "treatmentLength": "Durante 8 días.", "lgsGroup": "GRUPO_IV", "quantityToDispense": 2 }],

//     { "mainLGSGroup": "GRUPO_IV", "validityDays": 0, "allowedDispensing": 0, "dispensedTimes": 0 }

// }
