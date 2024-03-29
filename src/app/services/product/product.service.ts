import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '@constant';
import { Product } from '@interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient,
  ) { }

  getProductByIdAsync(id: string): Observable<Product> {
    return this._http.get<Product>(`${API_ENDPOINT}/products/${id}`)
  }

  getAllProductsAsync(): Observable<Product[]> {
    return this._http.get<Product[]>(`${API_ENDPOINT}/products`)
  }

  deleteProductByIdAsync(id: string): Observable<Product> {
    return this._http.delete<Product>(`${API_ENDPOINT}/products/${id}`)
  }

  updateProductAsync(product: Product): Observable<Product> {
    return this._http.put<Product>(`${API_ENDPOINT}/products/${product.id}`, product);
  }

  convertPriceInTaka(priceInPaisa: number): number {
    const priceInTaka = priceInPaisa / 100;
    const roundedPrice = +priceInTaka.toFixed(2);
    return roundedPrice;
  }

}
