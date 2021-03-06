import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category-service.service';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product= {
    title: '',
    price: '',
    category: '',
    imageUrl: ''
  };
  // product: Product[];
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categorySevice: CategoryService,
    public productService: ProductService
  ) {
    this.categories$ = categorySevice.getCategories();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).take(1).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {
  }
  save(product) {

    if (this.id) {
      this.productService.update(this.id , product);
    }
    else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);

  }

  delete() {
    if (confirm('Are you sure you want to delete this item?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }

  }
}
