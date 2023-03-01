import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private checkAuth: AuthService,
    private router: Router //    @Inject(Document) private document: Document
  ) {}

  loginGroup!: FormGroup;
  users: any = [];
  submitLoginForm(data: FormData) {
    this.checkAuth.getUserProfileData().subscribe((res) => {
      this.users = res;
    });
    this.users.forEach((user: any) => {
      console.log(user);
      if (
        user.email === this.loginGroup.value.email &&
        user.password === this.loginGroup.value.password
      ) {
        alert('User successfully Logged In!!');
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['dashboard']);
        return 0;
      } else {
        alert('Invalid Credentials!!');
        localStorage.clear();
        this.router.navigate(['register']);
        return 0;
      }
    });
  }

  ngOnInit(): void {
    //this.document.body.classList.add('login');
    this.loginGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
}
