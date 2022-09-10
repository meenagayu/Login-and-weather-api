import { Component, OnInit } from '@angular/core'; 
import { FormGroup,FormControl,Validators } from '@angular/forms'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 


@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {   
    hide=true;
    username ='gayathri'; 
    password = 'gayu'; 
    loginForm = new FormGroup({
      username:new FormControl('',Validators.required),  
      password:new FormControl('',Validators.required), 

    });

  constructor() { }

  ngOnInit(){  
  } 
  login() { 
    if(this.loginForm.valid){ 
     let user=this.loginForm.get('username')?.value; 
     let pass=this.loginForm.get('password')?.value;
     if(this.username==user && this.password==pass){
        alert("Login Sucess"); 
      } else {
        alert("Invalid user name or password");
      }
    }
  } 
}