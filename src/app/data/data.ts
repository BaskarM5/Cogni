import {Component} from '@angular/core';
import {CommonModule} from '@angular/common'; // Required for *ngFor

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.html',
  styleUrl: './data.css'
})
export class DataComponent {
  heroes = [
    {name: 'Superman', power: 'Strength'},
    {name: 'Batman', power: 'Intelligence'},
    {name: 'Wonder Woman', power: 'Divine'},
    {name: 'Tony Stark', power: 'Advanced'},
    {name: 'Hulk', power: 'Bulk'},
    {name: 'Thor', power: 'Lightning'}
  ];

}
