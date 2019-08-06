import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, shareReplay, startWith, tap } from 'rxjs/operators';
import { User } from './../interfaces/user';
import { NotifyService } from './notify.service';

@Injectable()
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {
      //// Get auth data, then get firestore user document || null
      this.user$ = this.afAuth.authState
      .pipe(
        switchMap(
          (user: any) => {
            if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges().pipe(shareReplay(1))
            }
            else {
              return of(null)
            }
          }),
        tap(user => sessionStorage.setItem('user', JSON.stringify(user))),
        startWith(JSON.parse(sessionStorage.getItem('user')))

      )
  }

  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
    ///// Login/Signup //////
    private logInErrorSubject = new Subject<string>();

    public getLoginErrors():Subject<string>{
           return this.logInErrorSubject;
    }
  
  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .catch(error => this.handleError(error));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // this.router.navigate(['/sitecontent']);
      })
      .catch (
        error => this.logInErrorSubject.next(error.message)

    )
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = auth();

    return fbAuth
      .sendPasswordResetEmail(email)
      .then(() => this.notify.update('Password update email sent', 'info'))
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      sessionStorage.removeItem('user'),
      this.router.navigate(['/']);
    })  }

  // private updateUserData(user) {
  //   // Sets user data to firestore on login
  //   const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  //   if (userRef) {
  //   } else {
  //   const data: User = {
  //     uid: user.uid,
  //     campaignId: user.campaignId,
  //     roles: {
  //       subscriber: true
  //     }
  //   }
  
  //   return userRef.set(data, { merge: true })
  // }


  ///// Role-based Authorization //////

  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }



  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }


}
