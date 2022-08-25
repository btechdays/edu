import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppUserService } from '../services/app-user.service';
import { GlobalConstants } from '../shared/global-constants';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  responseMessage:any;
  
  constructor(private dialog:MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: AppUserService,
    // private ngxService: NgxUiLoaderService,
    // private snackbarService: SnackbarService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['test@gmail.com',[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      password: ['test',Validators.required]
    })
  }

  signupAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "550px";
    this.dialog.open(SignupComponent,dialogConfig);
  }

  handleSubmit(){
    // this.ngxService.start();
    var formData = this.loginForm.value;
    var data = {
      email: formData.email,
      password: formData.password
    }
    this.userService.login(data).subscribe((response:any)=>{
      // this.ngxService.stop();
      // this.dialogRef.close();
      localStorage.setItem('token',response.token);
      this.router.navigate(['/admin/dashboard']);
    },(error)=>{
      // this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage = error.error?.message;
      }
      else{
        this.responseMessage = GlobalConstants.genericError;
      }
      // this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }

}
