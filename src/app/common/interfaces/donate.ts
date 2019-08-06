import { Time } from '@angular/common';
export interface DonateContent {
    id: string;
    text01: string;
    text02: string;
    imageURL: string;
    publisherId: string;
    creatorId: string;
    updateddate: string;
    publisheddate: string;
    reasoncode: string;
    published: boolean;
    updated: boolean;
 }
 export interface DonateUpdateContent {
    text01: string;
    text02: string;
    publisherid: string;
    updateddate: number;
    reasoncode: string;
    published: boolean;
    updated: boolean;
 }

 export interface Reason {
     reasonid: string;
     reasondescription: string;
 }