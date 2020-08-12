import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AddProductService } from 'src/app/services/add-product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @ViewChild("fileInput") fileInput;
  file:any;
  productForm: FormGroup;
  product = {
    name: '',
    category: '',
    price: '',
    description: '',
    farmer: {
      _id: '',
      Farmername: '',
      Farmeremail: '',
    },

  };
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private addService: AddProductService
  ) {}
  ngOnInit(): void {
    this.initializeForm();
  }
  addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.fileInput  = this.addService
            .upload(fileToUpload)

        }
    }
  initializeForm(): void {
    this.productForm = this.fb.group({
      name: new FormControl(this.product.name, [Validators.required]),
      category: new FormControl(this.product.category, [Validators.required]),
      price: new FormControl(this.product.price, [
        Validators.min(0),
        Validators.required,
      ]),
      description: new FormControl(this.product.description, [
        Validators.required,
        Validators.maxLength(15),
      ]),

      Farmername: new FormControl(this.product.farmer.Farmeremail, [
        Validators.required,
      ]),
      Farmeremail: new FormControl(this.product.farmer.Farmername, [
        Validators.required,
      ]),
      _id: new FormControl("5f31d9b80a0aa100428dc24f", [

      ]),


    });
  }
  onSubmit() {
    console.log(this.productForm.value);
    console.log(this.file)
    this.addFile()
    console.log(this.fileInput)
    this.addService.appProducts(this.productForm.value);
  }
}
