import {Component} from '@angular/core';
import {User} from "../../../shared";
import {ApiErrorResponse} from "../../../shared/interfaces/api/api.error.response";
import {UserService} from "../../../core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = new User();
  hasError: boolean = false;
  hasErrorMessage: ApiErrorResponse | undefined

  constructor(private userService: UserService, private router: Router) {
  }

  async login() {
    const response = await this.userService.getTokenAccess(this.user);
    console.log(response);

    /**
     * Pas d'erreur, donc on reçoit le token de l'utilisateur
     * TODO : Passer par un service pour le localStorage
     */
    if (response.status) {
      this.hasError = false;
      // Stockage dans le localStorage (Privilégier un service)
      localStorage.setItem('token', response.token);
      const loginResponse = await this.userService.getMe(response.token);
      console.log(loginResponse);
      
      // TODO : Storage du user dans le localStorage
      // TODO : User behaviorSubject
      // TODO : Redirection
    }

    this.hasError = true;
    this.hasErrorMessage = response.message;
  }
}
