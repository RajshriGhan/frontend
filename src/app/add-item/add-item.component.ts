import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {


  constructor(
    private productService: ProductService
  ){  }

    formItem = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl('')
    });
  

  get contactFormModalName() {
    return this.formItem.get('name');
  }

  get contactFormModalDescription() {
    return this.formItem.get('description');
  }

  get contactFormModalPrice() {
    return this.formItem.get('price');
  }

  getData(){
    console.warn(this.formItem.value);
    console.log(this.formItem.value);
  }

  save(): void {
    // this.spinner.show();
    // this.item = this.formItem.value;
    console.log("in component")
    this.productService.addItem(this.formItem.value).subscribe((res) => {
      console.log("Success");
      // this.getData();
      // this.addItemForm.reset({});
      // this.spinner.hide();
      // this.closeModal();
    }); 
  }
}