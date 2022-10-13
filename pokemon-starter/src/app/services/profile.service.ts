import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profile = new BehaviorSubject<Profile>({
    name: "Anonymous",
    email: "",
    birthYear: 1996
  });
  readonly profile = this._profile.asObservable();

  private _pet = new BehaviorSubject<string | null>("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png");
  readonly pet = this._pet.asObservable();

  constructor() { }

  setProfile(newProfile: Profile) {
    this._profile.next(newProfile);
  }

  getProfile(): Profile {
    return this._profile.getValue();
  }

  setPet(newPet: string | null) {
    this._pet.next(newPet);
  }

  getPet(): string | null {
    return this._pet.getValue();
  }
}
