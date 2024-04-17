import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  protected data!: T;

  constructor() { }

  setData(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
}
