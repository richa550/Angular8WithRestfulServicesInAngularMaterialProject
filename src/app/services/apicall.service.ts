import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { Response } from '@angular/http';
//import 'rxjs/map';
 import { map, take, catchError } from 'rxjs/operators';

@Injectable()
export class ApicallService {
 //url = 'https://restcountries.eu/rest/v2/alpha?codes=';
searchTermVal:String;
 //private searchTerm = new Subject<String>();

  constructor(private httpClient: HttpClient) {}

   sendRequestSearch(url:any) {  
    return this.httpClient.get(url).pipe(
     map((response: any) => {
        return response;    
      }),
    )      
  }
}
