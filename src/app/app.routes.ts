import {Routes} from '@angular/router';
import {HomeComponent} from './home/home';
import {DataComponent} from './data/data';
import {AddData} from './add-data/add-data';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'data', component: DataComponent},
  {path: 'add', component: AddData}
];
