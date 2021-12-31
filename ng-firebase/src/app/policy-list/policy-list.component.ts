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
    this.policyService.getPolicies().subscribe(data => {
      console.log(":A")
      this.policies = data.map(e => {
        
        console.log("-----------", e.payload.doc )

        return {
          name: "e.payload.doc.name"
        } as Policy;
      })

      console.log( this.policies )

    });
  }

  create(policy: Policy){
      this.policyService.createPolicy(policy);
  }


}