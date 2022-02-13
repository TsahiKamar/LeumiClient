import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { HomeComponent } from './components/home/home.component';
import { PaintComponent } from './components/paint/paint.component';

const routes: Routes = [
  { path: '', redirectTo : '/home',pathMatch:'full' },
  { path: 'home', component: HomeComponent},

  { path: 'grid', component: GridComponent },

  { path: 'paint', component: PaintComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
