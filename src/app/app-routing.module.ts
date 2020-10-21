import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AddItemComponent } from './add-item/add-item.component'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ProductListComponent } from './product-list/product-list.component'

const routes: Routes = [
  {   path: ' ',
   component: HomeComponent
  },
  {   path: '/products',
   component: ProductListComponent
  },
  {   path: '/add',
   component: AddItemComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}