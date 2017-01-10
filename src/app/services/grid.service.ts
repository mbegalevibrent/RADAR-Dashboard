import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Tile } from '../models/tile.model';
import { ErrorService } from './error.service';
import { ENV } from '../../environments/environment';

@Injectable()
export class GridService {

  constructor(private http: Http) {}

  get(): Observable<Tile[]> {
    return this.http.get(`${ENV.API_PATH}/mock-grid.json`)
      .delay(2000)
      .map(res => res.json().dataset || [])
      .catch(ErrorService.handleError);
  }
}
