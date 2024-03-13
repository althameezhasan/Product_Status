import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    // price: 0
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id: string | null = params.get('id'); // Use string or null type
      if (id !== null) {
        this.getProduct(parseInt(id, 10)); // Convert id string to number
      }
    });
  }
  
  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }
}
