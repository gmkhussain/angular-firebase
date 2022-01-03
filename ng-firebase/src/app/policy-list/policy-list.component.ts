import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/policy.service';
import { Policy } from 'src/app/policy.model';

@Component({
  selector: 'policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.scss']
})
export class PolicyListComponent implements OnInit {

  policies: Policy[];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {

    this.policyService.getPolicies().subscribe(
      data => {
        console.log(":A")
        this.policies = data.map(e => {
        let data = e.payload.doc.data();
        console.log("---", e.payload.doc.data() )
        return e.payload.doc.data() as Policy;
      })
        console.log( this.policies )
      },
      err => {
        console.log( "Err", err )
      }
    );

  }

  create(policy: Policy){
      this.policyService.createPolicy(policy);
  }


}