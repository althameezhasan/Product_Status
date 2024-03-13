import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product = {
    name: '', description: '',
    id: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  createProduct(): void {
    // Ensure price is converted to number
    // this.product.price = +this.product.price;

    this.productService.createProduct(this.product)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
