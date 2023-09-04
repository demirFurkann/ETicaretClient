import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Create_Product } from '../../../contracts/create_product';
import { List_Product } from '../../../contracts/list_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientSerivce: HttpClientService) { }


  create(product: Create_Product, succesCallBack?: any, errorCallBack?: (errorMessage:string) => void) {
    this.httpClientSerivce.post({
      controller: "products"
    }, product)

      .subscribe(result => {
        succesCallBack();

      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);

      });
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?:
    (errorMessage: string) => void): Promise<{ totalCount: number; products: List_Product[] }> {
    const promisedData: Promise<{ totalCount: number; products: List_Product[] }> = this.httpClientSerivce.get<{ totalCount: number;products:List_Product[] }>({
      controller: "products",
      queryString:`page=${page}&size=${size}`
    }).toPromise();


    promisedData.then(d => successCallBack())
      .catch((errorResponse:HttpErrorResponse)=> errorCallBack(errorResponse.message))

    return await promisedData;

  }

 async delete(id: number) {
  const deleteObservable:Observable<any>=  this.httpClientSerivce.delete<any>({
      controller:"products"
  }, id)

    await firstValueFrom(deleteObservable);
  }

}
