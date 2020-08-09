import { ContainerComponent } from './container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerRoutingModule {}
