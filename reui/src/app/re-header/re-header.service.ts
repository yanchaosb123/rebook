import { Injectable } from '@angular/core';
import { HttpUtil } from '../general/util/httpUtil.service';
import { ReHeaderComponent } from '../re-header/re-header.component';

@Injectable()
export class ReHeaderService {

    url = 'http://localhost:3000/bookCategory';


    constructor(public http: HttpUtil) {
    }

    getBookCategory(page: ReHeaderComponent): any {
        this.http.post(this.url,
                        {
                            msg: 'GetBookCategory'
                        },
                        data => {
                            console.log(data);
                        },
                        err => {
                            console.log(err);
                        }
                      );
    }
}
