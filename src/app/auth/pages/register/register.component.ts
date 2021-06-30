import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    name: ['Test',[Validators.required]],
    email: ['test@test.com',[Validators.required, Validators.email]],
    password: ['123456',[Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private aS:AuthService) { }

  ngOnInit(): void {
  }




  registro(){

    const {name,email,password}=this.miFormulario.value;

    this.aS.registro(name,email,password)
    .subscribe(ok =>{
      
      if(ok===true){
        this.router.navigateByUrl('/dashboard')
        Swal.fire(`Bienvenidx`,'Usuario creado', 'success');

      }else{
        //TODO mostrar msj de error
        Swal.fire(`Ups`,' Algo salió mal', 'error');
      }
      
    })

  }

}
