import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Prescription } from './info-classes/prescription';

@Injectable()
export class PrescriptionService {

  constructor(private _httpClient: HttpClient) { }

  public issuePrescription(prescription: Prescription): Observable<any> {

    let prescribedDrugs = [ ];
    for (let i = 0; i < prescription.drugs.length; i++) {
      prescribedDrugs.push({
        $class: prescription.drugs[i].$class,
        eanCode: prescription.drugs[i].eanCode,
        drugBrand: prescription.drugs[i].drugBrand,
        drugGenericName: prescription.drugs[i].drugGenericName,
        drugPresentation: prescription.drugs[i].drugPresentation,
        dosage: prescription.drugs[i].dosage,
        administrationRoute: prescription.drugs[i].administrationRoute,
        treatmentLength: prescription.drugs[i].treatmentLength,
        quantityToDispense: prescription.drugs[i].quantityToDispense
      });
    }

    let body = {
      username: prescription.doctor.username,
      password: prescription.doctor.password,
      workAddress: prescription.doctor.workAddress,
      patient: prescription.patient,
      drugs: prescribedDrugs
    };

    console.log(`body: ${JSON.stringify(body, undefined, 2)}`);

    return this._httpClient.post<any>(this.url, 
      body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${prescription.doctor.token}`
        }      
      }
    );
  }

  private url = 'http://34.73.45.118/issuePrescription';
}
