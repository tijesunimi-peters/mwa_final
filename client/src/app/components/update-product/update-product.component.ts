import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  id: string;
  data: any;
  messages = [];
  constructor(
    private service: ProductsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private addService: AddProductService
  ) {}

  productForm: FormGroup;
  file = null;

  initializeForm(): void {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.min(0), Validators.required]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
    });
  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }
  onSubmit() {
    console.log(this.productForm.value);
    // No API Endpoint
    // this.addService.appProducts(
    //   this.productForm.value,
    //   this.productForm.get('profile').value
    // );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProduct(id).subscribe((result: any) => {
      this.productForm.get('name').setValue(result.data.name);
      this.productForm.get('category').setValue(result.data.category);
      this.productForm.get('price').setValue(result.data.price);
      this.productForm.get('description').setValue(result.data.description);
    });

    this.initializeForm();
  }
}
