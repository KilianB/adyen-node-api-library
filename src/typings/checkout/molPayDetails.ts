/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class MolPayDetails {
    /**
    * The shopper\'s bank. Specify this with the issuer value that corresponds to this bank.
    */
    'issuer': string;
    /**
    * **molpay**
    */
    'type': MolPayDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MolPayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MolPayDetails.attributeTypeMap;
    }
}

export namespace MolPayDetails {
    export enum TypeEnum {
        FpxMy = <any> 'molpay_ebanking_fpx_MY',
        Th = <any> 'molpay_ebanking_TH'
    }
}
