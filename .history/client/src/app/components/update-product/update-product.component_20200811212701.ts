import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
 id:string
 data:any
  constructor(private service: ProductsService,private route: ActivatedRoute,private fb: FormBuilder,
    private router: ActivatedRoute,
    private addService: AddProductService) {


   }

  productForm: FormGroup;
  product = {
    name:'something',
    category: 'category',
    price: '20',
    description: 'a description',
    farmer: {
      _id: '',
      Farmername: '',
      Farmeremail: '',
    },
    image:''

  };
  setDefault() {

    let   product = {
      name:'something',
      category: 'category',
      price: '20',
      description: 'a description',
      farmer: {
        _id: '',
        Farmername: '',
        Farmeremail: '',
      },
      image:''

    };

    this.productForm.setValue(product);
  }


  initializeForm(): void {
    this.productForm = this.fb.group({
      name: new FormControl("something", [Validators.required]),
      category: new FormControl(this.product.category, [Validators.required]),
      price: new FormControl(this.product.price, [
        Validators.min(0),
        Validators.required,
      ]),
      description: new FormControl("hello", [
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

        profile: ['']




    });

  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productForm.get('profile').setValue(file);
    }
  }
  onSubmit() {




    this.addService.appProducts(this.productForm.value,this.productForm.get('profile').value);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getone(id).subscribe((result:any)=>{
      this.product=result.data
      this.productForm.reset();
      console.log(this.product)
    })

    this.initializeForm();
this.setDefault()

  }



}
