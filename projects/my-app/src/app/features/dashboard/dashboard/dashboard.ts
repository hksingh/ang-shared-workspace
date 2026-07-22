import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: false
})
export class DashboardComponent {
  faCoffee=faCoffee;
}
