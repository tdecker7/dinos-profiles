import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Profile } from '../Profile';
import { PROFILES } from '../assets/dinosaurs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor() { }

  getProfiles(): Observable<Profile[]> {
    return of(PROFILES);
  }
}
