import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
constructor(
  private authentificationService: AuthentificationService,
  private router: Router,
  private toastr: ToastrService
) { }
ngOnInit(): void {
}

login(email: string, password: string) {
  this.authentificationService.login(email, password).subscribe({
    next: (response) => {
      const token = response.token;
      localStorage.setItem('token', token);
      this.router.navigate(['/roadmaps']);
      this.toastr.success('Login successful!', 'Success');
    },
    error: (error) => {
      console.log(error);
      this.toastr.error('Login failed. Please check your credentials.', 'Error');
    }
  });
}
}