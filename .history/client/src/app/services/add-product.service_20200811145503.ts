import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable()
export class AddProductService {
  constructor(private http: HttpClient) {}
product:any;
  appProducts(data: any,file:any) {
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
      },
      image:file

};
formdata.append(this.product)
console.log(this.product)
this.http.post(Constants.PRODUCTS_URL,this.product).subscribe();


  }
  upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);

    return input;
}
}
