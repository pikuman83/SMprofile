import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  profileForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    género: new FormControl(''),
    bio: new FormControl(''),
  });

  submitted = false; //used to show the error messages on submit
  
  getErrorMessage() {
    return this.profileForm.controls['email'].hasError('required') ? 'Email is required' :
      'Invalid email pattern';
  }

  save(){
    this.submitted = true;
    if(!this.profileForm.valid){
      return;
    }
    console.table(this.profileForm.value);
    this.submitted = false;
  }

}
