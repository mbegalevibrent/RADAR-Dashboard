export interface TablePatientMonitoringData {
  patientId: string,
  deviceId: string,
  deviceName: string
  dataRate: number,
  status: string,
  sensors: SensorStatus[]
}

export interface SensorStatus {
  message_loss: number,
  name: string,
  received_message: number,
  status: string
}
