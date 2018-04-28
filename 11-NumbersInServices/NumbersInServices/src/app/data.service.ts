import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbers1: number[] = [];
  numbers2: number[] = [];
  numbers3: number[] = [];

  constructor() {}

  retrieveNumber(group: number): number[] {
    console.log('* retrieveNumber @ ', group);
    if (group === 1) {
      return this.numbers1;
    } else if (group === 2) {
      return this.numbers2;
    } else if (group === 3) {
      return this.numbers3;
    }
  }

  addNumber(group: number, num: number) {
    console.log('* addNumber @ ', group, '=', num);
    if (group === 1) {
      this.numbers1.push(num);
    } else if (group === 2) {
      this.numbers2.push(num);
    }
  }

  differentNumber() {
    console.log('* differentNumber');
    let sum1 = 0;
    let sum2 = 0;

    if (this.numbers1.length > 0) {
      sum1 = this.numbers1.reduce(function(n1, n2) {
        return n1 + n2;
      });
    }

    if (this.numbers2.length > 0) {
      sum2 = this.numbers2.reduce(function(n1, n2) {
        return n1 + n2;
      });
    }

    const diff = sum1 - sum2;

    return this.numbers3.push(diff);
  }

  clearNumber() {
    console.log('* clearnumber');
    this.numbers1.length = 0;
    this.numbers2.length = 0;
    this.numbers3.length = 0;
  }
}
