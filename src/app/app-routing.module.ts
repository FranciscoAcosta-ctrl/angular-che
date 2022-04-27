import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeElchedelbarrioComponent } from './home-elchedelbarrio/home-elchedelbarrio.component';
import { MenuElchedelbarrioComponent } from './menu-elchedelbarrio/menu-elchedelbarrio.component';
import { UbiElchedelbarrioComponent } from './ubi-elchedelbarrio/ubi-elchedelbarrio.component';

const routes: Routes = [
  {path: 'home', component: HomeElchedelbarrioComponent},
  {path: 'menu', component: MenuElchedelbarrioComponent},
  {path: 'ubicacion', component: UbiElchedelbarrioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
