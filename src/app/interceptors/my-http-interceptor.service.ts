import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   console.log("###INTERCEPTING THE HTTP REQ :"+req);
   req = req.clone({ headers : req.headers.append('Content-Type', 'application/json')})
   req = req.clone({ headers : req.headers.append('Username', 'Tufail')})

   console.log(req.headers.get('Content-Type'));
   console.log(req.headers.get('Username'));

   return next.handle(req);
  }
}
