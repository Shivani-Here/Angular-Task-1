import { Component } from '@angular/core';
import { ProductService } from '../shared/service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  getProductList : any[] = [];
  qArray :any[]=[];
  tableProductsArr :any[] =[];
  totalAmt = 0;
  constructor(private http : ProductService){
  }

  ngOnInit(): void {
    this.getLists();
  }
  getLists(){
    this.http.getProductsList().subscribe((res : any)=>{
      this.getProductList = res;
      console.log(this.getProductList);
      this.qArray = Array(this.getProductList.length).fill(1)
    })
  }
  decreament(i:any){
    if(this.qArray[i] > 1){
      this.qArray[i]--;
    }
  }
  increament(i:any){
    this.qArray[i]++
  }
  addToTable(list:any, total:number, prodcTotal:number){
    console.log(list);
    this.tableProductsArr.push({...list, total, prodcTotal})
    console.log(this.tableProductsArr);
    this.totalAmt= this.totalAmt + prodcTotal  
   }
   resetBag(){
    this.tableProductsArr= [];
    this.totalAmt=0;
   }
}
