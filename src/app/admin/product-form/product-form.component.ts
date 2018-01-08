import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service.service';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  constructor(
    private router: Router,
    categorySevice: CategoryService,
    public productService: ProductService
  ) {
    this.categories$ = categorySevice.getCategories();
  }

  ngOnInit() {
  }
  save(product) {
  this.productService.create(product);
  this.router.navigate(['/admin/products']);
  }
}
