import { Product } from '../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category;
  constructor(productService: ProductService, categoryService: CategoryService, route: ActivatedRoute) {
    productService.getAll().subscribe(products => {

      this.products = this.filteredProducts = products;
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) : this.products;
      }

      );
    });
    this.categories$ = categoryService.getCategories();

  }


}
