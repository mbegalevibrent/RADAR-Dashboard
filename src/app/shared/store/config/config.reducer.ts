import * as configActions from './config.actions'
import { Config } from './config.model'

export interface State extends Config {
  isLoaded?: boolean
  isValid?: boolean
}

const initialState: State = {
  isLoaded: false,
  isValid: false,
  stats: {},
  sensors: {},
  timeIntervals: {},
  units: {},
  specs: []
}

export function reducer (state = initialState, action: configActions.Actions): State {
  switch (action.type) {

    case configActions.LOAD: {
      return Object.assign({}, state, {
        isLoaded: false
      })
    }

    case configActions.LOAD_SUCCESS: {
      const payload: Config = action.payload
      const isValid = !!payload.sensors
        && !!payload.specs && !!payload.timeIntervals
        && !!payload.stats && !!payload.units

      return Object.assign({}, payload, {
        isLoaded: true,
        isValid
      })
    }

    default:
      return state
  }
}

export const getIsLoaded = (state: State) => state.isLoaded
