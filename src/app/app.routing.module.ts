import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AuthGuard} from './auth.guard.service';
//二级路由空白页面
import { ChildrenPageComponent } from './components/children.page/children.page.component';
import { IndexComponent } from './pages/index/index.component';
//登录
import { LoginComponent } from './pages/login/login.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { SetComponent } from './pages/user/set/set.component';
import { AboutComponent } from './pages/user/about/about.component';

const appRoutes:Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"index",component:IndexComponent},
  {path:"merchant",component:MerchantComponent},
  //{path:"form/:id",component:UserDetailComponent},
  {path:"products",component:ProductsComponent},
  {path:"user",component:ChildrenPageComponent,
      children:[
        {path:"",component:UserComponent},
        {path:"set",component:SetComponent},
        {path:"about",component:AboutComponent}
      ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
       appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }