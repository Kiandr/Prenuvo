import { Component } from '@angular/core';

enum Condition {
  Perfect = 1,
   Average= 2,
   Poor = 3
}
export abstract class EnumCore {
  public static model = Condition;
  public constructor() {
  }
  public static doSomething(): any {
    return this.model;
  }
}
