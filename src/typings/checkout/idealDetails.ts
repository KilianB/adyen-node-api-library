/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2022 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 *
 * Adyen Checkout API
 *
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class IdealDetails {
    /**
    * The iDEAL issuer value of the shopper\'s selected bank. Set this to an **id** of an iDEAL issuer to preselect it.
    */
    'issuer': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **ideal**
    */
    'type'?: IdealDetails.TypeEnum;
}

export namespace IdealDetails {
    export enum TypeEnum {
        Ideal = <any> 'ideal'
    }
}
