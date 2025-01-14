/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentReversalResource {
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    /**
    * The [`pspReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_pspReference) of the payment to reverse. 
    */
    'paymentPspReference': string;
    /**
    * Adyen\'s 16-character reference associated with the reversal request.
    */
    'pspReference': string;
    /**
    * Your reference for the reversal request.
    */
    'reference'?: string;
    /**
    * The status of your request. This will always have the value **received**.
    */
    'status': PaymentReversalResource.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "paymentPspReference",
            "baseName": "paymentPspReference",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentReversalResource.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return PaymentReversalResource.attributeTypeMap;
    }
}

export namespace PaymentReversalResource {
    export enum StatusEnum {
        Received = <any> 'received'
    }
}
