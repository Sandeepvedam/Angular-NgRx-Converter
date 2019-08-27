import { Injectable } from '@angular/core';
@Injectable()
export class AppService {
   constructor() { }
   getKeys() {
       return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '#', '0', '←'];
   }

   getChars() {
       return ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   }
}