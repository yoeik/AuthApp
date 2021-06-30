import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent  {

  miFormulario: FormGroup= this.fb.group({
    email:    ['test1@test.com',[Validators.required,Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  })
  constructor(
    private fb : FormBuilder,
    private router:Router,
    private aS: AuthService) { }

 

  login(){
  
    const {email,password}=this.miFormulario.value;

    this.aS.login(email,password)
      .subscribe(ok =>{
       
        if(ok===true){
          this.router.navigateByUrl('/dashboard')
          Swal.fire(`Bienvenidx`,'', 'success');

        }else{
          //TODO mostrar msj de error
          Swal.fire(`Error`, ok, 'error');
        }
        
      })
    
  }

}
