/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AndroidApp } from './androidApp';

export class AndroidAppsResponse {
    /**
    * Apps uploaded for Android payment terminals.
    */
    'data'?: Array<AndroidApp>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<AndroidApp>"
        }    ];

    static getAttributeTypeMap() {
        return AndroidAppsResponse.attributeTypeMap;
    }
}
