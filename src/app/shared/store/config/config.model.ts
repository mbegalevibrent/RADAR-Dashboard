import { Sensor } from '../sensors/sensors.model'

export interface Config {
  sensors: {
    [id: string]: Sensor
  }
  units: {
    [id: string]: Unit
  }
  stats: {
    [id: string]: Stat
  }
  timeIntervals: {
    [id: string]: TimeInterval
  }
  specs: string[]
}

export interface Label {
  EN: string
}

export interface Unit {
  label: Label
}

export interface Stat {
  label: Label
}

export interface TimeInterval {
  value: number
  label: Label
}
