/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountHolderDetails } from './accountHolderDetails';
import { AccountHolderStatus } from './accountHolderStatus';
import { ErrorFieldType } from './errorFieldType';
import { KYCVerificationResult } from './kYCVerificationResult';

export class UpdateAccountHolderResponse {
    /**
    * The code of the account holder.
    */
    'accountHolderCode'?: string;
    'accountHolderDetails'?: AccountHolderDetails;
    'accountHolderStatus': AccountHolderStatus;
    /**
    * The description of the account holder.
    */
    'description'?: string;
    /**
    * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The legal entity of the account holder.
    */
    'legalEntity': UpdateAccountHolderResponse.LegalEntityEnum;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
    */
    'primaryCurrency'?: string;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    'verification': KYCVerificationResult;
    /**
    * The identifier of the profile that applies to this entity.
    */
    'verificationProfile'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "accountHolderDetails",
            "baseName": "accountHolderDetails",
            "type": "AccountHolderDetails"
        },
        {
            "name": "accountHolderStatus",
            "baseName": "accountHolderStatus",
            "type": "AccountHolderStatus"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "legalEntity",
            "baseName": "legalEntity",
            "type": "UpdateAccountHolderResponse.LegalEntityEnum"
        },
        {
            "name": "primaryCurrency",
            "baseName": "primaryCurrency",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "KYCVerificationResult"
        },
        {
            "name": "verificationProfile",
            "baseName": "verificationProfile",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAccountHolderResponse.attributeTypeMap;
    }
}

export namespace UpdateAccountHolderResponse {
    export enum LegalEntityEnum {
        Business = <any> 'Business',
        Individual = <any> 'Individual',
        NonProfit = <any> 'NonProfit',
        Partnership = <any> 'Partnership',
        PublicCompany = <any> 'PublicCompany'
    }
}
