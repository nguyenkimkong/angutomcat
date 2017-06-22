import { Injectable } from '@angular/core';

export abstract class LoggerService {

  constructor() { }
  
  abstract log( msg: string, other?: any );

}
