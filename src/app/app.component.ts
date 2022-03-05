import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'progweb-app';
  registerForm!: FormGroup;
  products: any;

  constructor(
    public fb: FormBuilder,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required]
    });

    this.productService.getAllProducts().subscribe(resp => {
      this.products = resp;
    },
      error => { console.error(error) } 
    );
  }

  register(): void {
    this.productService.createProduct(this.registerForm.value).subscribe(resp => {
      this.registerForm.reset();
      this.products.push(resp);
    }, 
      error => { console.error(error) }
    );
  }

}
