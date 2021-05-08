import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppProductComponent } from './app-product/app-product.component';
import { DeleteDirectComponent } from './delete-direct/delete-direct.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListProductWithAsyncComponent } from './list-product-with-async/list-product-with-async.component';
import { ListProductWithSubscribeComponent } from './list-product-with-subscribe/list-product-with-subscribe.component';
import { UpdateDirectComponent } from './update-direct/update-direct.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UsingMattableComponent } from './using-mattable/using-mattable.component';

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
  path: 'Update/:id',
  component: UpdateProductComponent,
},

{
  path: 'Delete/:id',
  component: DeleteProductComponent,
},
{
  path: 'usingMAT',
  component: UsingMattableComponent,
},
{
  path: 'Product/:id',
  component: EditComponent,
},
{
  path: 'Update',
  component: UpdateDirectComponent,
},
{
  path: 'Delete',
  component: DeleteDirectComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
