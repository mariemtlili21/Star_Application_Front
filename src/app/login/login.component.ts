import { Component, OnInit } from '@angular/core';
import { SimpleUserServiceService } from '../simpleUserService/Registration/simple-user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private userService: SimpleUserServiceService) { }

  ngOnInit(): void {
  }

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.userService.loginUser(loginData).subscribe(
      response => {
        // Traiter la réponse en cas de succès
        console.log('!!!!!!compte t7al jawek behiii !!!!!!!!', response);
      },
      error => {
        // Traiter l'erreur en cas d'échec
        console.error('!!!!!! thabet fl coordonner mte3k !!!!!', error);
      }
    );
  }
}
