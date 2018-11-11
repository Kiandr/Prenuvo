import { Component } from '@angular/core';

enum Condition {
  Perfect = 1,
   Average= 2,
   Poor = 3
}
export  class EnumCore {
  public static model = Condition;
  public constructor() {
  }
  public static getEnum(): any {
    return this.model;
  }
}
