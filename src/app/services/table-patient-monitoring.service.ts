import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { TablePatientMonitoringData } from '../models/table-patient-monitoring-data.model';
import { ErrorService } from './error.service';

@Injectable()
export class TablePatientMonitoringService {

  constructor(private http: Http) {
    //this.getAllPatientDevices()
  }

  //patientsDevices: Array<any>;
  //patientsDevicesData: Observable<TablePatientMonitoringData[]>

  get(): Observable<TablePatientMonitoringData[]> {
    // TODO: Change when API is ready
    return this.http.get(`${PARAMS.API_LOCAL}/mock-patient-monitoring.json`)
      .map(res => res.json().dataset || [])
      .map(this.parsePatientMonitoringData)
      .catch(ErrorService.handleError);
    //console.log(this.patientsDevicesData)
    //return this.patientsDevicesData
    //return this.getPatientDevicesData()
  }

  /*getPatientDevicesData(){
    return this.http.get(`${PARAMS.API_URI}/User/GetAllPatients`)
      .map(res => res.json().patients)
      .map((patient) => {
        return Observable.forkJoin([
          Observable.of(patient),
          this.http.get(`${PARAMS.API_URI}/Device/Status/${patient.user_id}/${patient.source_id[0]}`).map(res => res.json()),
          this.http.get(`${PARAMS.API_URI}/Device/Status/${patient.user_id}/${patient.source_id[1]}`).map(res => res.json())
        ]).map((patientDetails) =>  {
          return Observable.of({
            patientId: patientDetails.user_id,
            deviceId: patientDetails.source_id,
            deviceName: patientDetails.name,
            dataRate: patientDetails.received_message,
            status: patientDetails.status,
            sensors: patientDetails.sensors
          })
        })

      })
  }*/

/*
  getAllPatientDevices(){
    return this.http.get(`${PARAMS.API_URI}/User/GetAllPatients`)
      .map(res => res.json().patients || [])
      .subscribe(res => {
        let patientsDevices = this.getPatientDevices(res)
        this.getPatientDevicesStatus(patientsDevices)
      });
  }

  getPatientDevices(patients){
    let patientDevices: any[] = []
    patients.map(patient => {
        for (let i = 0; i < patient.source_id.length; i++) {
          patientDevices.push({
            patientId: patient.user_id,
            deviceId: patient.source_id[i]
          })
        }
      });
    return patientDevices
  }

  getPatientDevicesStatus(patientDevices){
    let req = []
    for(let i = 0; i < patientDevices.length; i++){
      req.push(this.http.get(`${PARAMS.API_URI}/Device/Status/${patientDevices[i].patientId}/${patientDevices[i].deviceId}`).map(res => res.json()));
    }
    Observable.forkJoin(req).subscribe(devicesDetail => {
      this.parsePatientDevicesData(patientDevices, devicesDetail)
    });
  }

  parsePatientDevicesData(patientDevices, devicesDetail) {
    for(let i = 0; i < patientDevices.length; i++){
      for(let key in devicesDetail[i]) patientDevices[i][key]=devicesDetail[i][key];
    }
    //console.log(patientDevices)
    this.patientsDevicesData = patientDevices
  }


    /*let test = patientDevices
      .flatMap(patientDevice => this.http.get(`${PARAMS.API_URI}/Device/Status/${patientDevice.patientId}/${patientDevice.deviceId}`))
      .map(res => res.json())
    console.log(test)
    return test*/
/*
  parsePatientMonitoringData(){
    {
      let device = []
      return {
        d:device
      }

    }
  } */

  parsePatientMonitoringData(patients) {
    return patients
      .map(patient => {
        return {
          patientId: patient.user_id,
          deviceId: patient.source_id,
          deviceName: patient.name,
          dataRate: patient.received_message,
          status: patient.status,
          sensors: patient.sensors
        }
      });
  }
}
