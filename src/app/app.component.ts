import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Osiris-Movie-Client';

  isLoggedIn() {
    const val = !!localStorage.getItem('token');
    return val;
  }
}
