import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import{AngularFireAuth}from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import { emit } from 'process';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  

  constructor(private router :Router) { 
    
  }
  
  login(email :string,password :string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password).then(()=>
    {
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard']);
     
    }, err=>{
      alert('Something went wrong');
      this.router.navigate(['/login']);
    }
  )
  }
  register(email:string ,password:string){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
      alert('Successful');
      this.router.navigate(['/login']);
    }, err=>{
      this.router.navigate(['/layout']);
    }
  )
  }
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      console.error(err);
      alert("An error occurred while logging out.");
    });
}
}
