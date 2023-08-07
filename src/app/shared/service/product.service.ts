import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";


@Injectable({
    providedIn : "root"
})

export class ProductService{
   apiUrl = `https://angular-task-1-e99eb-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`;
    constructor(private http : HttpClient){}
    
    addProductsList(res : any){
        return this.http.post(this.apiUrl, res)
    }
    getProductsList(){
        return this.http.get(this.apiUrl, {
            headers : new HttpHeaders({
                'name' : 'shivani'
            }),
            observe : 'body'
        }).pipe(map((jsonData : any) =>{
            let arr = [];
            for(let data in jsonData ){
                arr.push({...jsonData[data], id : data})
            }
            return arr;
        }))
    }
}