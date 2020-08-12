import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable()
export class AddProductService {
  constructor(private http: HttpClient) {}
  product: any;
  appProducts(data: any, image: any) {
    let formdata = new FormData();

    this.product = {
      name: data.name,
      category: data.category,
      description: data.description,
      price: data.price,
      farmer: {
        _id: data._id,
        name: data.Farmername,
        email: data.Farmeremail,
      },
      image: image,
    };

    formdata.append('name', this.product.name);
    formdata.append('category', this.product.category);
    formdata.append('description', this.product.description);
    formdata.append('farmer[_id]', this.product.farmer._id);
    formdata.append('farmer[name]', this.product.name);
    formdata.append('farmer[email]', this.product.email);
    formdata.append('image', this.product.image);
    console.log(image);

    this.http.post(Constants.PRODUCTS_URL, formdata).subscribe();
    console.log(formdata);
  }
}
