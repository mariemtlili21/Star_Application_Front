import { Component, OnInit } from '@angular/core';
import { User } from '../usermodele/usermodele';
import { SimpleUserServiceService } from '../simpleUserService/Registration/simple-user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    idUser: 0,
    firstName: '',
    lastName: '',
    username: '',
    birthDate: new Date(),
    email: '',
    numPhone: '',
    password: '',
    dateCreation: new Date(),
    salary: 0,
    description: ''
  };

  constructor(private userService: SimpleUserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        // Traitez la réponse ou effectuez une redirection
      },
      error => {
        console.error('Error registering user', error);
        // Gérez l'erreur, affichez un message d'erreur, etc.
      }
    );
  }

}
