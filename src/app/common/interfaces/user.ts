export interface User {
    uid: string;
    campaignId: string;
    roles: Roles
  }
export interface Roles { 
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
    volunteer?: boolean;
    campaignworker?: boolean
 }