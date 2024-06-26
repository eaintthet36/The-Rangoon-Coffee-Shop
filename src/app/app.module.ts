import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';import { SuccessComponent } from './pages/login/login-dialogs/success/success.component';
import { FailComponent } from './pages/login/login-dialogs/fail/fail.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductDetailComponent } from './pages/menu/product-detail/product-detail.component';
import { MenuCategoriesComponent } from './pages/menu/menu-categories/menu-categories.component';
;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SuccessComponent,
    FailComponent,
    MenuComponent,
    AboutUsComponent,
    DetailProductComponent,
    ProductDetailComponent,
    MenuCategoriesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
