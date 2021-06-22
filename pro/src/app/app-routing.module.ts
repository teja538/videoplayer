import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { VedComponent } from './ved/ved.component';
import { HomeComponent } from './home/home.component';
import { VediodetailComponent } from './videodetail/vediodetail.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideocentreComponent } from './videocentre/videocentre.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'videos',component:VedComponent },
  {path:'vd',component: VediodetailComponent },
  {path:'vl',component:VideolistComponent  },
  {path:'vc',component:VideocentreComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
