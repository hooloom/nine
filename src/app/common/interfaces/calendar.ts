import { Time } from '@angular/common';
export interface Calendar {
   id: string;
   description: string;
   summary: string;
   start: Start;
   end: End
 }
  export interface Start { 
   date?: Date;
   dateTime?: Time;
   timeZone?: string
 }
 export interface End {
   date?: Date;
   dateTime?: Time;
   timeZone?: string
 }

  