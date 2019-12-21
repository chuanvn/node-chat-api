import {Response} from "express";

export class HttpResponseModel {
    public res: Response;

    setResponse(success: boolean = false, data: any = {}, msg: string = '') {
        this.res.json({
            success,
            msg,
            data
        });
    }

    getError(validate) {
        let msg: string = '';
        if (!validate.isEmpty()) {
            const errors: any = Object.values(validate.mapped());
            errors.forEach(item => {
                msg += `${item.msg}. `;
            });
        }

        return msg;
    }
}
