import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Policy } from 'src/app/policy.model';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore: AngularFirestore) { }

  getPolicies() {
    
    console.log( "asdasd", this.firestore.collection('policies').snapshotChanges() )

    return this.firestore.collection('policies').snapshotChanges();
  }

  createPolicy(policy: Policy){
    return this.firestore.collection('policies').add(policy);
  }

}
