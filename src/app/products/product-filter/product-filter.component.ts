import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent {
  categories$;
  @Input('category') category;
  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getCategories();
  }

}
