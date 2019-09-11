import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  constructor(private toast: ToastrService,
              private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    this.toast.success('success', 'logged out successfully');
    this.router.navigateByUrl('');
  }
}
