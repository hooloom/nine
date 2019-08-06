import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class LocalStorageService  {

  protected subjects: {[key: string]: BehaviorSubject<any>} = {};

  select(key: string, defaultValue: any = null): Observable<any> {

    if (this.subjects.hasOwnProperty(key)) {
      return this.subjects[key];
    }

    if (localStorage.getItem(key) && defaultValue) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    const value = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue;

    return this.subjects[key] = new BehaviorSubject(value);
  }

  set(key: string, value: any): void {

    localStorage.setItem(key, JSON.stringify(value));

    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(value);
    }
  }

  remove(key: string): void {

    localStorage.removeItem(key);

    if (this.subjects.hasOwnProperty(key)) {
      this.subjects[key].next(null);
    }
  }

}