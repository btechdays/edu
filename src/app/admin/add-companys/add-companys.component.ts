import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-add-companys',
  templateUrl: './add-companys.component.html',
  styleUrls: ['./add-companys.component.scss']
})
export class AddCompanysComponent implements OnInit {
  companyForm:any = FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.companyForm = this.formBuilder.group({
      name:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex)]],
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      contactNumber:[null,[Validators.required,Validators.pattern(GlobalConstants.contactNumberRegex)]],
      password:[null,[Validators.required]],
    })
  }

}
