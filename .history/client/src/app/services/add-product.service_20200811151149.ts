import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable()
export class AddProductService {
  constructor(private http: HttpClient) {}
product:any;
  appProducts(data: any,image:any) {
    let formdata = new FormData()
    this.product={
      name:data.name,
      category:data.category,
      description:data.description,
      price:data.price,
      farmer:{
        _id:data._id,
        name:data.Farmername,
        email:data.Farmeremail
      }

};


formdata.append('text',this.product);
formdata.append('file',image)

this.http.post(Constants.PRODUCTS_URL,formdata).subscribe();
console.log(formdata)

  }

}
