export class Drug {
    constructor(
        public index: number,
        public $class: string,
        public eanCode: string,
        public drugBrand: string,
        public drugGenericName: string,
        public drugPresentation: string,
        public dosage: string,
        public administrationRoute: string,
        public treatmentLength: string,
        public lgsGroup: string,
        public quantityToDispense: number
    ) {

    }
}

// [
//     {
//         "$class": "com.hoffentech.prescription.Drug",
//         "eanCode": "7501300408136",
//         "drugBrand": "Amplirón DUO",
//         "drugGenericName": "Amoxicilina, Ácido Clavulánico",
//         "drugPresentation": "Caja con 14 comprimidos - Comprimidos 875 mg / 125 mg,
//         "dosage": "Tomar una tableta cada 12 horas",
//         "administrationRoute": "ORAL",
//         "treatmentLength": "Durante 8 días",
//         "lgsGroup": "GRUPO_IV",
//         "quantityToDispense": 2
//     },

//     {
//         "$class": "com.hoffentech.prescription.Drug",
//         "eanCode": "7501493860636",
//         "drugBrand": "Sedaken",
//         "drugGenericName": "Naproxeno sódico / paracetamol",
//         "drugPresentation": "Caja con 16 tabletas - Tabletas 275 mg / 300 mg",
//         "dosage": "Tomar una tableta cada 8 horas",
//         "administrationRoute": "ORAL",
//         "treatmentLength": "Durante 10 días",
//         "lgsGroup": "GRUPO_V",
//         "quantityToDispense": 3
//     }
// ]
