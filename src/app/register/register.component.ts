import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AlertService} from '../alert/alert.service';
import {UserService} from '../user/user.service';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                  if (data['error']) {
                    this.alertService.error(data['error'].message);
                    this.loading = false;
                  } else {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                  }
                },
                error => {
                  console.log(error);
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
