import { Component, OnInit } from '@angular/core';

import { Prescription } from '../info-classes/prescription';
import { AditionalInfo } from '../info-classes/aditional-info';
import { Drug } from '../info-classes/drug';
import { Doctor } from '../info-classes/doctor';
import { Patient } from '../info-classes/patient';

import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.css']
})
export class PrescriptionFormComponent implements OnInit {

  model: Prescription = this.newPrescription();
  prescribedDrug: Drug = this.newDrug();
  drugsFlag = false;

  availableDrugs: Drug[] = [
    new Drug(0, 'com.hoffentech.prescription.Drug', '7501300408136', 'Amplirón DUO', 'Amoxicilina, Ácido Clavulánico.',
      'Caja con 14 comprimidos - Comprimidos 875 mg / 125 mg', '', 'ORAL', '', 'GRUPO_IV', 0),

    new Drug(1, 'com.hoffentech.prescription.Drug', '7501493860636', 'Sedaken', 'Naproxeno sódico / paracetamol',
      'Caja con 16 tabletas - Tabletas 275 mg / 300 mg', '', 'ORAL', '', 'GRUPO_IV', 0),

    new Drug(1, 'com.hoffentech.prescription.Drug', '7501298234601', 'Eutirox', 'Levotiroxina sódica',
      'Caja con 50 tabletas de 100 mcg', '', 'ORAL', '', 'GRUPO_IV', 0)
  ];

  availableDoctors: Doctor[] = [
    new Doctor(0, '8269fc66-6d9d-4c63-8240-c3a53cfddf78', 'José', 'Pérez', 'López', '000005', 
      'resource:com.hoffentech.base.role.TPAEmployee#2f71ffb6-3596-4320-a039-0fd06d06efc4', 
      'resource:com.hoffentech.base.doctor.PrivateWorkAddress#e8ff18ca-fca6-4c76-9c46-3d82a9d0e76b', 
      'La Paz 99 Col. Nápoles, Benito Juárez, CDMX',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdmMGVkNDc2N2ZlMzAwMGZmYTM0MWQiLCJpYXQiOjE1NTE4MzE0Njl9.K-l1b1-CHu9XImCFgi_GK3B6xAiXVtSR_VAgEtmnWvE', 
      'vitamedica123@mail.com', '$2a$05$UMuheli3A6.JkHfMwUys7.y27UPDhEgMNp2Gw5BIxlGYZzfbnrStu'),

    new Doctor(1, 'f27b380c-6b52-46ea-8e5a-2feecba2eb92', 'Luisa', 'Martínez', 'Vidal', '000006',
      'resource:com.hoffentech.base.role.TPAEmployee#5d552ce8-dfd0-473f-bdde-325fff17ae0a', 
      'resource:com.hoffentech.base.doctor.PrivateWorkAddress#81b56402-b44f-48a3-b01f-3a0514de2b08', 
      'Escandón 99 Col. Condesa, Miguel Hidalgo, CDMX', 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdmMGVkNDc2N2ZlMzAwMGZmYTM0MWQiLCJpYXQiOjE1NTE4MzIyNTV9.UkTxV-jM3ghanNlwqnBPm_FjzRs6Y2ua1ZdJt3af8to',
      'vitamedica124@mail.com', '$2a$05$UMuheli3A6.JkHfMwUys7.y27UPDhEgMNp2Gw5BIxlGYZzfbnrStu')
  ];

  availablePatients: Patient[] = [
    new Patient(0, 'ed572657-6f82-45c0-8f0a-2c09571ba59d', 'Veronica', 'Trejo', 'Juárez', 
      'resource:com.hoffentech.base.role.BankEmployee#82f84382-6981-428a-b7de-1196b60e38f2', 'Empleado'),

    new Patient(1, '24ac2a63-130b-4a65-8ec0-7d70312085a4', 'Luis', 'Rosas', 'Ruiz', 
      'resource:com.hoffentech.base.role.BankEmployee#f9226706-7322-4386-b8cf-e4eac2d7cc78', 'Empleado'),

    new Patient(2, '4c3977c9-ddc7-4218-9307-7773fd2632c6', 'Rogelio', 'Mares', 'Gudiño', 
      'resource:com.hoffentech.base.role.Beneficiary#2db2a9f7-1ea7-4632-ba2a-3400eb07f64a', 'Beneficiario'),

    new Patient(3, '3c8db733-9966-49dc-8925-6d9daa045a81', 'Irene', 'Palma', 'Bárcenas', 
      'resource:com.hoffentech.base.role.Beneficiary#30757a9f-8797-4b20-82f4-4c32954570ce', 'Beneficiario')
  ];

  constructor(private prescriptionService: PrescriptionService) { }

  ngOnInit() { }

  onChangeDrug(selectedValue) {
    this.prescribedDrug = this.availableDrugs[selectedValue];
  }

  onChangeDoctor(selectedValue) {
    this.model.doctor = this.newDoctor();

    if (selectedValue >= 0) {
      this.model.doctor = this.availableDoctors[selectedValue];
    } 
  }

  onChangePatient(selectedValue) {
    this.model.patient = '';

    if (selectedValue >= 0) {
      this.model.patient = this.availablePatients[selectedValue].member;
    } 
  }

  isPrescriptionValid(presForm) {
    return presForm.form.valid && this.model.drugs.length > 0;
  }

  savePrescription(presForm, selDoc, selPatient) {

    if (!this.isPrescriptionValid(presForm)) {
      console.log('Datos inválidos o sin medicamentos');
      return;
    }

    this.prescriptionService.issuePrescription(this.model).subscribe((result) => {
      console.log(`result after issuePrescription: ${result}`);
      alert('La receta fue almacenada con éxito');

      this.model = this.newPrescription();
      this.prescribedDrug = this.newDrug();
      selDoc.value = -1;
      selPatient.value = -1;

    }, (error) => {
      console.log(`error on issuePrescription: ${JSON.stringify(error, undefined, 2)}`);
      alert(`Error: ${JSON.stringify(error.error, undefined, 2)}`);
    });
  }

  addDrugs() {
    this.drugsFlag = true;
  }

  newPrescription() {
    return new Prescription(this.newDoctor(), 
      '', [], new AditionalInfo('', 0, 0, 0), 'XXXXXXXXXXXX')
  }

  newDrug() {
    return new Drug(-1, 'com.hoffentech.prescription.Drug', '', '', '',
      '', '', '', '', '', 0);
  }

  newDoctor() {
    return new Doctor(-1, '', '', '', '', '', '', '', '', '', '', '');
  }

  addPrescribedDrugs(selectControl, formDrugsControl) {

    // Copy the selected Drug:
    let selectedDrug = new Drug(
      this.prescribedDrug.index,
      this.prescribedDrug.$class,
      this.prescribedDrug.eanCode,
      this.prescribedDrug.drugBrand,
      this.prescribedDrug.drugGenericName,
      this.prescribedDrug.drugPresentation,
      this.prescribedDrug.dosage,
      this.prescribedDrug.administrationRoute,
      this.prescribedDrug.treatmentLength,
      this.prescribedDrug.lgsGroup,
      this.prescribedDrug.quantityToDispense
    );

    this.prescribedDrug.dosage = '';
    this.prescribedDrug.treatmentLength = '';

    this.model.drugs.push(selectedDrug);

    this.prescribedDrug = this.newDrug();
    selectControl.value = -1;
    formDrugsControl.reset();
  }

  prescribedDrugsBack(selectControl, formDrugsControl) {

    this.prescribedDrug = this.newDrug();
    selectControl.value = -1;
    formDrugsControl.reset();

    this.drugsFlag = false;
  }
}
