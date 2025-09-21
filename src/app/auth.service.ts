import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
  }
  // login method
  login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}


}
