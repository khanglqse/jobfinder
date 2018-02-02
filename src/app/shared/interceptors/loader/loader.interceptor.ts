import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BackgroundLoader } from '../../services/background-loader/background-loader.service';
import { SKIP_LOADER } from '../../constants/api.constants';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    numberReq: number;

    constructor(private loader: BackgroundLoader) {
        this.numberReq = 0;
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        if (req.headers.has(SKIP_LOADER)) {
            const clone = req.clone({ headers: req.headers.delete(SKIP_LOADER) });
            return next.handle(clone);
        }

        this.numberReq++;
        if (this.numberReq > 0 && !this.loader.isShowing) {
            this.loader.show();
        }
        return next.handle(req)
            .do(evt => {
                if (evt instanceof HttpResponse) {
                    setTimeout(() => {
                        this.hideLoader();
                    }, 250);
                }
            }, (err: any) => {
                this.hideLoader();
            })
            .catch((err: any) => {
                return Observable.throw(err);
            });
    }

    hideLoader() {
        this.numberReq--;
        if (this.numberReq <= 0 && this.loader.isShowing) {
            this.loader.hide();
            this.numberReq = 0;
        }
    }
}
