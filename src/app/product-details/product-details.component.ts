import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  @Input() selectedProduct = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.selectedProduct) {
      this.product = this.selectedProduct;
      console.log(this.selectedProduct);
      
    }

  }
}
