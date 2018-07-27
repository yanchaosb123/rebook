import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpUtil {

    constructor(private _http: HttpClient) {

    }

    private addParams( paramMap: any = null ) {

    }


    // post 函数设了默认的 success 和 error 回掉函数，什么也不做，避免出错
    public post(url: string, paramMap: any,
                success: Function = (data) => {},
                error: Function = (msg) => {}
    ) {
        return this._http.post(url, paramMap).subscribe( (res) => success(res), (msg) => error(msg));
    }




}
