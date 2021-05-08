import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ListProductWithSubscribeComponent } from './list-product-with-subscribe/list-product-with-subscribe.component';
import { ListProductWithAsyncComponent } from './list-product-with-async/list-product-with-async.component';
import { AppProductComponent } from './app-product/app-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {MatTableModule} from '@angular/material/table';
import { UsingMattableComponent } from './using-mattable/using-mattable.component';
import { EditComponent } from './edit/edit.component';
import { UpdateDirectComponent } from './update-direct/update-direct.component';
import { DeleteDirectComponent } from './delete-direct/delete-direct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductWithSubscribeComponent,
    ListProductWithAsyncComponent,
    AppProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    UsingMattableComponent,
    EditComponent,
    UpdateDirectComponent,
    DeleteDirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
