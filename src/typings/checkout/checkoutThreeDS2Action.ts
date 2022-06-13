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

export class CheckoutThreeDS2Action {
    /**
    * A token needed to authorise a payment.
    */
    'authorisationToken'?: string;
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * A subtype of the token.
    */
    'subtype'?: string;
    /**
    * A token to pass to the 3DS2 Component to get the fingerprint.
    */
    'token'?: string;
    /**
    * **threeDS2**
    */
    'type': CheckoutThreeDS2Action.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;
}

export namespace CheckoutThreeDS2Action {
    export enum TypeEnum {
        ThreeDS2 = <any> 'threeDS2'
    }
}
