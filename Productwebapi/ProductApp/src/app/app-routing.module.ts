import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductWithAsyncComponent } from './list-product-with-async/list-product-with-async.component';
import { ListProductWithSubscribeComponent } from './list-product-with-subscribe/list-product-with-subscribe.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [

  {
    path: '',redirectTo:'Home',pathMatch:'full'
},
  {
    path: 'Home',
    component: HomeComponent,
},

{
  path: 'AddProduct',
  component: AppProductComponent,
},
{
  path: 'ListProductWithAsync',
  component: ListProductWithAsyncComponent,
},
{
  path: 'ListProductWithSubscribe',
  component: ListProductWithSubscribeComponent,
},
{
  path: 'Update',
  component: UpdateProductComponent,
},

{
  path: 'Delete',
  component: DeleteProductComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
