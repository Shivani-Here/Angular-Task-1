import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('myForm')  productLists : any;

  constructor(private httpServe : ProductService) {
    
  }
  onSubmit(){
    console.log(this.productLists.value);
    this.httpServe.addProductsList(this.productLists.value).subscribe((data : any)=>{
      console.log(data);
    })
  }
}
