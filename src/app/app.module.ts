import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//引入路由组件
import { LoginRoutingModule }      from './pages/login/login.routing.module';
import {AppRoutingModule} from './app.routing.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChildrenPageComponent } from './components/children.page/children.page.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { MerchantComponent } from './pages/merchant/merchant.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { SetComponent } from './pages/user/set/set.component';
import { AboutComponent } from './pages/user/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ChildrenPageComponent,
    IndexComponent,
    LoginComponent,
    MerchantComponent,
    ProductsComponent,
    UserComponent,
    SetComponent,
    AboutComponent
  ],
  imports: [
    AppRoutingModule,
    LoginRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
