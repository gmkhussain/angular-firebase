import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@Angular/forms";

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent implements OnInit {

  form = new FormGroup({
      uid: new FormControl(''),
      name: new FormControl(''),
      age: new FormControl(''),
  });

  constructor(private firestore: AngularFirestore) { }
  
  ngOnInit(): void {
  }


  onSubmit() {
    this.firestore.collection('policies').add({
      uid: this.form.value.uid, 
      name: this.form.value.name,
      age: this.form.value.age
    })
    .then(res => {
        console.log(res);
        this.form.reset();
    })
    .catch(e => {
        console.log(e);
    })
  }


}
