import { ProductsService } from 'src/app/services/products.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  file = null;
  messages = [];

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private productService: ProductsService,
    private authService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.min(0), Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  saveResponse = (result) => {
    this.messages = ["Product Saved"];
  }

  saveErrors(http) {
    this.messages = http.error.errors;
  }

  onSubmit() {
    const product = { ...this.productForm.value };
    product.farmer = this.authService.user;
    product.image = this.file;

    this.productService.save(product).subscribe(this.saveResponse, this.saveErrors);
  }
}
