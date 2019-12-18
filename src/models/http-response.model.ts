import {Response} from "express";

export class HttpResponseModel {
    public success: boolean;
    public msg: string;
    public data: any;
    private res: Response;

    constructor(success: boolean = false, msg: string = '', data: any = {}) {
        this.success = success;
        this.msg = msg;
        this.data = data;
    }

     setResponse() {
        this.res.json({
            success: this.success,
            msg: this.msg,
            data: this.data
        })
    }
}
