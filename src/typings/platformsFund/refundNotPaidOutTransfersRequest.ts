/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RefundNotPaidOutTransfersRequest {
    /**
    * The code of the account from which to perform the refund(s).
    */
    'accountCode': string;
    /**
    * The code of the Account Holder which owns the account from which to perform the refund(s).
    */
    'accountHolderCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RefundNotPaidOutTransfersRequest.attributeTypeMap;
    }
}
